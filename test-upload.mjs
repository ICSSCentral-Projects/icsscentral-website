import fs from 'fs';

async function runTest() {
  console.log("🚀 Starting API Upload Test...");

  const STRAPI_URL = "http://localhost:1337";
  const envFile = fs.readFileSync(".env", "utf8");
  const tokenMatch = envFile.match(/VITE_STRAPI_TOKEN=(.*)/);
  if (!tokenMatch) {
    console.error("❌ Could not find VITE_STRAPI_TOKEN in .env");
    return;
  }
  const STRAPI_TOKEN = tokenMatch[1].trim();

  // 1. Upload a file
  console.log("⏳ Uploading dummy.txt to Strapi...");
  const formData = new FormData();
  
  // Use native Blob
  const fileContent = fs.readFileSync('./dummy.txt');
  const blob = new Blob([fileContent], { type: 'text/plain' });
  formData.append('files', blob, 'dummy.txt');

  const uploadRes = await fetch(`${STRAPI_URL}/api/upload`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${STRAPI_TOKEN}`
    },
    body: formData
  });

  if (!uploadRes.ok) {
    const errorBody = await uploadRes.text();
    console.error(`❌ Upload failed: ${uploadRes.status}`, errorBody);
    return;
  }

  const uploadData = await uploadRes.json();
  const fileId = uploadData[0].id;
  console.log(`✅ File uploaded successfully! File ID: ${fileId}`);
  console.log(`🔗 File URL: ${STRAPI_URL}${uploadData[0].url}`);

  // 2. Create the FOI request
  console.log("⏳ Creating FOI request...");
  const payload = {
    data: {
      foi_title: "Node Script Upload Test",
      refId: "#FOI-26-9999",
      trackingNo: "FOI-2026-9999",
      requestedBy: "Automated Node Script",
      foi_email: "node@script.com",
      foi_affiliation: "External (Non-thomasian)",
      foi_category: "Others",
      foi_purpose: "Testing file attachment via API",
      request_status: "pending",
      publishedDate: new Date().toISOString().split('T')[0],
      supportingDoc: fileId
    }
  };

  const foiRes = await fetch(`${STRAPI_URL}/api/foi-requests`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${STRAPI_TOKEN}`
    },
    body: JSON.stringify(payload)
  });

  if (!foiRes.ok) {
    const errorBody = await foiRes.text();
    console.error(`❌ FOI Request failed: ${foiRes.status}`, errorBody);
    return;
  }

  const foiData = await foiRes.json();
  console.log(`✅ FOI Request created successfully! ID: ${foiData.data.id}`);
  console.log("🎉 Test complete! The file was successfully attached to the new request.");
}

runTest();
