const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');

const s3 = new S3Client({
  region: 'us-east-1',
  endpoint: 'http://mocks3:9000',
  credentials: {
    accessKeyId: 'minio-user',
    secretAccessKey: 'minio1234'
  },
  forcePathStyle: true
});

async function uploadFile(bucket, key, body) {
  await s3.send(new PutObjectCommand({
    Bucket: bucket,
    Key: key,
    Body: body
  }));
}

module.exports = { uploadFile };