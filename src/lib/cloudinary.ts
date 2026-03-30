// For frontend: use their upload widget
export const cloudinaryConfig = {
  cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
  uploadPreset: 'your-unsigned-preset' // Create this in Cloudinary dashboard
}

// Simple image URL builder
export function getImageUrl(publicId: string, options?: { width?: number; height?: number }) {
  const base = `[res.cloudinary.com](https://res.cloudinary.com/${cloudinaryConfig.cloudName}/image/upload)`
  
  let transforms = ''
  if (options?.width) transforms += `w_${options.width},`
  if (options?.height) transforms += `h_${options.height},`
  if (transforms) transforms = transforms.slice(0, -1) + '/'
  
  return `${base}/${transforms}${publicId}`
}
