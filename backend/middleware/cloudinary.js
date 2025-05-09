import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import dotenv from 'dotenv';

dotenv.config({ path: './.env' });

const requiredEnvVars = ['CLOUD_NAME', 'CLOUDINARY_API_KEY', 'CLOUDINARY_API_SECRET'];
requiredEnvVars.forEach((varName) => {
  if (!process.env[varName]) {
    throw new Error(`Missing required environment variable: ${varName}`);
  }
});

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true, 
});
const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => ({
    folder: 'kahba_resumes',
    format: 'pdf',
    resource_type: 'raw',
    public_id: file.originalname.split('.')[0], 
    transformation: [
      { quality: 'auto', fetch_format: 'pdf' },
      { flags: 'lossy' }, 
    ],
  }),
});

export { cloudinary, storage };