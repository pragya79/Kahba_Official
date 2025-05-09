import express from 'express';
import { addCandidate } from '../controllers/carrier.controller.js';
import upload from '../middleware/upload.js';
import multer from 'multer';

const router = express.Router();

const handleUploadError = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ error: 'File size exceeds the limit of 5MB.' });
    }
    return res.status(400).json({ error: err.message });
  } else if (err) {

    return res.status(400).json({ error: err.message });
  }
  next();
};


router.post(
  '/carrier',
  upload.single('resume'),
  handleUploadError, 
  addCandidate 
);

export default router;