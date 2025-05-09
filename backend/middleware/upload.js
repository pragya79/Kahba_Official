import multer from 'multer';
import { storage } from './cloudinary.js';
import dotenv from 'dotenv';

dotenv.config({ path: './.env' });

const FILE_SIZE_LIMIT = parseInt(process.env.FILE_SIZE_LIMIT, 10) || 5 * 1024 * 1024;


const upload = multer({
  storage, 
  limits: { fileSize: FILE_SIZE_LIMIT },
  fileFilter: (req, file, cb) => {
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];

    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true); 
    } else {
      cb(new Error('Invalid file type. Only PDF, DOC, and DOCX files are allowed!'), false); 
    }
  },
});

export default upload;