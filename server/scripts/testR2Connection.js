import { S3Client, ListBucketsCommand, HeadBucketCommand, PutObjectCommand } from '@aws-sdk/client-s3';
import dotenv from 'dotenv';

dotenv.config();

console.log('\n' + '='.repeat(70));
console.log('🔍 CLOUDFLARE R2 CONNECTION DIAGNOSTICS');
console.log('='.repeat(70) + '\n');

// Check environment variables
console.log('📋 ENVIRONMENT VARIABLES:');
console.log('─'.repeat(70));
console.log(`CLOUDFLARE_ACCOUNT_ID: ${process.env.CLOUDFLARE_ACCOUNT_ID ? '✓ Set' : '✗ Missing'}`);
console.log(`R2_ACCESS_KEY_ID: ${process.env.R2_ACCESS_KEY_ID ? '✓ Set' : '✗ Missing'}`);
console.log(`R2_SECRET_ACCESS_KEY: ${process.env.R2_SECRET_ACCESS_KEY ? '✓ Set (length: ' + process.env.R2_SECRET_ACCESS_KEY?.length + ')' : '✗ Missing'}`);
console.log(`R2_BUCKET_NAME: ${process.env.R2_BUCKET_NAME || '✗ Missing'}`);
console.log(`CLOUDFLAIRE_URL_PREFIX: ${process.env.CLOUDFLAIRE_URL_PREFIX || '✗ Missing'}`);
console.log('');

if (!process.env.CLOUDFLARE_ACCOUNT_ID || !process.env.R2_ACCESS_KEY_ID || !process.env.R2_SECRET_ACCESS_KEY) {
  console.error('❌ Missing required environment variables!');
  process.exit(1);
}

// Configure R2 client
const r2Client = new S3Client({
  region: 'auto',
  endpoint: `https://${process.env.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  },
});

console.log('🔗 R2 ENDPOINT:');
console.log(`https://${process.env.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com`);
console.log('');

// Test 1: List Buckets
console.log('TEST 1: List Available Buckets');
console.log('─'.repeat(70));
try {
  const listCommand = new ListBucketsCommand({});
  const response = await r2Client.send(listCommand);
  
  if (response.Buckets && response.Buckets.length > 0) {
    console.log('✅ Successfully connected to R2!');
    console.log(`\nFound ${response.Buckets.length} bucket(s):`);
    response.Buckets.forEach((bucket, index) => {
      const isTarget = bucket.Name === process.env.R2_BUCKET_NAME;
      console.log(`  ${index + 1}. ${bucket.Name} ${isTarget ? '← TARGET BUCKET' : ''}`);
    });
    
    // Check if target bucket exists
    const bucketExists = response.Buckets.some(b => b.Name === process.env.R2_BUCKET_NAME);
    if (!bucketExists) {
      console.log(`\n⚠️  WARNING: Target bucket "${process.env.R2_BUCKET_NAME}" not found!`);
      console.log('Available bucket names:', response.Buckets.map(b => b.Name).join(', '));
    }
  } else {
    console.log('⚠️  No buckets found in this account');
  }
} catch (error) {
  console.error('❌ Failed to list buckets');
  console.error('Error:', error.message);
  if (error.Code === 'InvalidAccessKeyId') {
    console.error('\n💡 TIP: Your R2_ACCESS_KEY_ID is incorrect');
  } else if (error.Code === 'SignatureDoesNotMatch') {
    console.error('\n💡 TIP: Your R2_SECRET_ACCESS_KEY is incorrect');
  }
  process.exit(1);
}

console.log('\n');

// Test 2: Check if target bucket is accessible
console.log('TEST 2: Check Target Bucket Access');
console.log('─'.repeat(70));
try {
  const headCommand = new HeadBucketCommand({ Bucket: process.env.R2_BUCKET_NAME });
  await r2Client.send(headCommand);
  console.log(`✅ Bucket "${process.env.R2_BUCKET_NAME}" is accessible`);
} catch (error) {
  console.error(`❌ Cannot access bucket "${process.env.R2_BUCKET_NAME}"`);
  console.error('Error:', error.message);
  if (error.$metadata?.httpStatusCode === 404) {
    console.error('\n💡 TIP: Bucket does not exist - check the bucket name spelling');
  } else if (error.$metadata?.httpStatusCode === 403) {
    console.error('\n💡 TIP: Access denied - check your API token permissions');
  }
  process.exit(1);
}

console.log('\n');

// Test 3: Try to upload a test file
console.log('TEST 3: Upload Test File');
console.log('─'.repeat(70));
try {
  const testFileName = `test/connection-test-${Date.now()}.txt`;
  const testContent = 'This is a test file created by R2 diagnostic script';
  
  console.log(`Attempting to upload: ${testFileName}`);
  
  const putCommand = new PutObjectCommand({
    Bucket: process.env.R2_BUCKET_NAME,
    Key: testFileName,
    Body: Buffer.from(testContent),
    ContentType: 'text/plain',
  });
  
  await r2Client.send(putCommand);
  
  const publicUrl = `${process.env.CLOUDFLAIRE_URL_PREFIX}/${testFileName}`;
  console.log('✅ Upload successful!');
  console.log(`\nFile URL: ${publicUrl}`);
  console.log('\n💡 TIP: Try accessing this URL in your browser to verify public access is configured.');
  console.log('If you get 404/403, you need to configure the bucket for public access in Cloudflare dashboard.');
} catch (error) {
  console.error('❌ Upload failed');
  console.error('Error:', error.message);
  console.error('Error Code:', error.Code);
  
  if (error.Code === 'AccessDenied') {
    console.error('\n🔴 ACCESS DENIED - Possible causes:');
    console.error('   1. API Token lacks "Object Write" permission');
    console.error('   2. Bucket has access restrictions');
    console.error('   3. Token is for a different account');
    console.error('\n💡 SOLUTION:');
    console.error('   Go to Cloudflare Dashboard → R2 → Manage R2 API Tokens');
    console.error('   - Create a new API token with "Object Read & Write" permissions');
    console.error('   - Make sure it has access to the correct bucket');
    console.error('   - Update your .env file with the new credentials');
  }
  process.exit(1);
}

console.log('\n' + '='.repeat(70));
console.log('✅ ALL TESTS PASSED - R2 is properly configured!');
console.log('='.repeat(70) + '\n');

process.exit(0);
