# S2S Video Processing System

A scalable video processing system built with microservices architecture, featuring large files upload like video, PDF etc, processing, and storage capabilities.

![image](https://github.com/user-attachments/assets/77594276-d8ce-4b02-977f-3d20e7601cb1)

## Architecture

This system consists of the following services:

- **Uploader Service**: Handles video file uploads and queues processing jobs
- **Processor Service**: Processes uploaded videos (transcoding, compression, etc.)
- **RabbitMQ**: Message broker for communication between services
- **MinIO**: S3-compatible object storage for video files

## Prerequisites

- Docker and Docker Compose
- Node.js (for local development)

## Quick Start

1. Clone the repository:

```bash
git clone https://github.com/nafeoalam/s2s-large-file.git
cd s2s-video
```

2. Start all services:

```bash
docker-compose up -d
```

3. The services will be available at:
   - **Uploader Service**: <http://localhost:3000>
   - **RabbitMQ Management**: <http://localhost:15672> (guest/guest)
   - **MinIO Console**: <http://localhost:9001> (minio/minio123)
   - **MinIO API**: <http://localhost:9000>

## Services

### Uploader Service

- **Port**: 3000
- **Purpose**: Accepts video file uploads and publishes processing jobs to RabbitMQ
- **Technology**: Node.js

### Processor Service

- **Purpose**: Consumes processing jobs from RabbitMQ and processes video files
- **Technology**: Node.js

### Storage (MinIO)

- **Purpose**: S3-compatible object storage for video files
- **Access Key**: minio
- **Secret Key**: minio123

### Message Queue (RabbitMQ)

- **Purpose**: Reliable message passing between services
- **Management UI**: Available at <http://localhost:15672>

## Development

### Running Individual Services

Each service can be run independently for development:

```bash
# Uploader Service
cd uploader-service
npm install
npm start

# Processor Service
cd processor-service
npm install
npm start
```

### Environment Variables

Configure the following environment variables as needed:

- `RABBITMQ_URL`: RabbitMQ connection string
- `S3_ENDPOINT`: MinIO/S3 endpoint
- `S3_ACCESS_KEY`: S3 access key
- `S3_SECRET_KEY`: S3 secret key

## API Endpoints

### Upload Service

- `POST /upload` - Upload video files
- `GET /status/:jobId` - Check processing status

## Monitoring

- **RabbitMQ Management**: Monitor queue status and message flow
- **MinIO Console**: View stored files and bucket status

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
