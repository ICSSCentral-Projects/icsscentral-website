/**
 * strapiApi.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Central API layer for all Strapi backend calls.
 * Place this file at:  src/lib/strapiApi.ts
 *
 * Requires these env vars in your .env:
 *   VITE_STRAPI_URL=http://localhost:1337
 *   VITE_STRAPI_TOKEN=<your-strapi-api-token>
 *   VITE_CLOUDINARY_CLOUD_NAME=<optional, only if using Cloudinary>
 * ─────────────────────────────────────────────────────────────────────────────
 */

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL as string;
const STRAPI_TOKEN = import.meta.env.VITE_STRAPI_TOKEN as string;

// ─── Generic fetch wrapper ──────────────────────────────────────────────────

async function strapiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${STRAPI_URL}/api${endpoint}`;

  const res = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(STRAPI_TOKEN ? { Authorization: `Bearer ${STRAPI_TOKEN}` } : {}),
      ...options.headers,
    },
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Strapi ${res.status}: ${body}`);
  }

  return res.json() as Promise<T>;
}

// Multipart upload version (for FOI file attachment)
async function strapiUploadRequest<T>(
  endpoint: string,
  formData: FormData
): Promise<T> {
  const url = `${STRAPI_URL}/api${endpoint}`;

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      ...(STRAPI_TOKEN ? { Authorization: `Bearer ${STRAPI_TOKEN}` } : {}),
    },
    body: formData,
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Strapi ${res.status}: ${body}`);
  }

  return res.json() as Promise<T>;
}

// ─── Helper: resolve a Strapi media URL ────────────────────────────────────

export function getStrapiMediaUrl(url: string | undefined): string | undefined {
  if (!url) return undefined;
  if (url.startsWith('http')) return url;
  return `${STRAPI_URL}${url}`;
}

// ─────────────────────────────────────────────────────────────────────────────
// INQUIRY  (Contact Page form → POST /inquiries)
// Maps to backend schema: inquiry
//   fullName, inquiry_email, inquiry_org, inquiry_subject,
//   inquiry_message, inquiry_status
// ─────────────────────────────────────────────────────────────────────────────

export interface SubmitInquiryPayload {
  firstName: string;
  lastName: string;
  email: string;
  /** "student" | "faculty" | "parent" | "alumni" | "other" */
  category: string;
  /** "general" | "partnership" | "sponsorship" | "suggestions" | "collaboration" | "other" */
  inquiryCategory: string;
  message: string;
}

export async function submitInquiry(data: SubmitInquiryPayload): Promise<void> {
  await strapiRequest('/inquiries', {
    method: 'POST',
    body: JSON.stringify({
      data: {
        fullName: `${data.firstName} ${data.lastName}`.trim(),
        inquiry_email: data.email,
        inquiry_org: data.category,         // sender's affiliation/org type
        inquiry_subject: data.inquiryCategory,
        inquiry_message: data.message,
        inquiry_status: 'New',
      },
    }),
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// FOI REQUEST  (FOI Portal form → POST /foi-requests)
// Maps to backend schema: foi-request
//   foi_title, refId, trackingNo, foi_status, publishedDate,
//   requestedBy, foi_affiliation, foi_category, foi_purpose,
//   supportingDoc (media), denialReason
// ─────────────────────────────────────────────────────────────────────────────

export interface SubmitFOIPayload {
  firstName: string;
  lastName: string;
  /** UST Student | UST Faculty/Staff | Alumni | Organization | External (Non-Thomasian) */
  affiliation: string;
  email: string;
  mobile: string;
  /** Academic | Financial | Facilities | Events | Others */
  category: string;
  /** Title / document name being requested */
  document: string;
  /** Reason / purpose for the request */
  reason: string;
  /** Optional supporting PDF file */
  file?: File | null;
}

export async function submitFOIRequest(data: SubmitFOIPayload): Promise<void> {
  let uploadedFileId: number | null = null;

  // Step 1 – upload supporting document if provided
  if (data.file) {
    const fileForm = new FormData();
    fileForm.append('files', data.file);
    const uploaded = await strapiUploadRequest<Array<{ id: number }>>('/upload', fileForm);
    if (uploaded.length > 0) {
      uploadedFileId = uploaded[0].id;
    }
  }

  // Step 2 – create the FOI request entry
  const payload: Record<string, unknown> = {
    foi_title: data.document,
    requestedBy: `${data.firstName} ${data.lastName}`.trim(),
    foi_affiliation: data.affiliation,
    foi_category: data.category,
    foi_purpose: data.reason,
    foi_status: 'pending',
    publishedDate: new Date().toISOString().split('T')[0], // YYYY-MM-DD
  };

  if (uploadedFileId) {
    payload.supportingDoc = uploadedFileId;
  }

  await strapiRequest('/foi-requests', {
    method: 'POST',
    body: JSON.stringify({ data: payload }),
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// FOI REQUESTS – fetch published list (FOI Portal listing)
// ─────────────────────────────────────────────────────────────────────────────

export interface FOIRequestItem {
  id: number;
  refId: string;
  foi_title: string;
  publishedDate: string;
  requestedBy: string;
  foi_affiliation: string;
  foi_purpose: string;
  trackingNo: string;
  foi_status: 'successful' | 'pending' | 'denied';
  denialReason?: string;
}

export async function getFOIRequests(): Promise<FOIRequestItem[]> {
  type StrapiResponse = {
    data: Array<{
      id: number;
      refId: string;
      foi_title: string;
      publishedDate: string;
      requestedBy: string;
      foi_affiliation: string;
      foi_purpose: string;
      trackingNo: string;
      foi_status: 'successful' | 'pending' | 'denied';
      denialReason?: string;
    }>;
  };

  const res = await strapiRequest<StrapiResponse>(
    '/foi-requests?sort=publishedDate:desc&pagination[pageSize]=50'
  );

  return res.data.map((item) => ({
    id: item.id,
    refId: item.refId ?? `#FOI-${item.id}`,
    foi_title: item.foi_title,
    publishedDate: item.publishedDate,
    requestedBy: item.requestedBy,
    foi_affiliation: item.foi_affiliation,
    foi_purpose: item.foi_purpose,
    trackingNo: item.trackingNo ?? '',
    foi_status: item.foi_status,
    denialReason: item.denialReason,
  }));
}

// ─────────────────────────────────────────────────────────────────────────────
// EVENTS  (Events Page)
// ─────────────────────────────────────────────────────────────────────────────

export interface StrapiEvent {
  id: number;
  title: string;
  slug: string;
  date: string;        // ISO datetime string
  category: string;
  externalLink?: string;
  image?: {
    url: string;
    alternativeText?: string;
  };
}

export async function getEvents(): Promise<StrapiEvent[]> {
  type StrapiResponse = {
    data: Array<{
      id: number;
      title: string;
      slug: string;
      date: string;
      category: string;
      externalLink?: string;
      image?: { url: string; alternativeText?: string };
    }>;
  };

  const res = await strapiRequest<StrapiResponse>(
    '/events?sort=date:asc&populate=image&pagination[pageSize]=50'
  );

  return res.data.map((item) => ({
    id: item.id,
    title: item.title,
    slug: item.slug,
    date: item.date,
    category: item.category,
    externalLink: item.externalLink,
    image: item.image
      ? { ...item.image, url: getStrapiMediaUrl(item.image.url) ?? item.image.url }
      : undefined,
  }));
}

// ─────────────────────────────────────────────────────────────────────────────
// ARTICLES / BLOG POSTS  (Blogs Page)
// ─────────────────────────────────────────────────────────────────────────────

export interface StrapiArticle {
  id: number;
  post_title: string;
  post_author: string;
  postDate: string;
  post_category: 'Student Spotlight' | 'Community Development' | 'Opportunities';
  post_content?: string;
  coverImage?: {
    url: string;
    alternativeText?: string;
  };
}

export async function getArticles(): Promise<StrapiArticle[]> {
  type StrapiResponse = {
    data: Array<{
      id: number;
      post_title: string;
      post_author: string;
      postDate: string;
      post_category: 'Student Spotlight' | 'Community Development' | 'Opportunities';
      post_content?: string;
      coverImage?: { url: string; alternativeText?: string };
    }>;
  };

  const res = await strapiRequest<StrapiResponse>(
    '/articles?sort=postDate:desc&populate=coverImage&pagination[pageSize]=50'
  );

  return res.data.map((item) => ({
    id: item.id,
    post_title: item.post_title,
    post_author: item.post_author,
    postDate: item.postDate,
    post_category: item.post_category,
    post_content: item.post_content,
    coverImage: item.coverImage
      ? { ...item.coverImage, url: getStrapiMediaUrl(item.coverImage.url) ?? item.coverImage.url }
      : undefined,
  }));
}

export async function getArticleById(id: string | number): Promise<StrapiArticle | null> {
  type StrapiResponse = {
    data: {
      id: number;
      post_title: string;
      post_author: string;
      postDate: string;
      post_category: 'Student Spotlight' | 'Community Development' | 'Opportunities';
      post_content?: string;
      coverImage?: { url: string; alternativeText?: string };
    } | null;
  };

  try {
    const res = await strapiRequest<StrapiResponse>(
      `/articles/${id}?populate=coverImage`
    );
    if (!res.data) return null;
    const item = res.data;
    return {
      id: item.id,
      post_title: item.post_title,
      post_author: item.post_author,
      postDate: item.postDate,
      post_category: item.post_category,
      post_content: item.post_content,
      coverImage: item.coverImage
        ? { ...item.coverImage, url: getStrapiMediaUrl(item.coverImage.url) ?? item.coverImage.url }
        : undefined,
    };
  } catch {
    return null;
  }
}
