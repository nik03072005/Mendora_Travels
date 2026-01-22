import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

// Configure the S3 client for Cloudflare R2
const r2Client = new S3Client({
  region: 'auto', // R2 uses 'auto' for region
  endpoint: `https://${process.env.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  },
});

// Utility function to upload a file to R2
export const uploadToR2 = async (fileBuffer, fileName, bucketName) => {
  try {
    const command = new PutObjectCommand({
      Bucket: bucketName || process.env.R2_BUCKET_NAME,
      Key: fileName,
      Body: fileBuffer,
      ContentType: 'image/jpeg', // Adjust based on file type
    });

    await r2Client.send(command);

    // Construct the URL (if the bucket is public)
    const fileUrl = `${process.env.CLOUDFLAIRE_URL_PREFIX}/${fileName}`;
    return { success: true, fileUrl };
  } catch (error) {
    console.error('Error uploading to R2:', error.message);
    throw new Error('Failed to upload to R2');
  }
};

export default uploadToR2