import express from 'express';
import { uploadFile, getFileContent } from '../controllers/fileController.js';
import multer from 'multer';
import path from 'path';

const fileRouter = express.Router();

// Configure Multer storage
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    console.log("file",file);
    cb(null, `${Date.now()}_${file.originalname}`);
  }
});

const upload = multer({ storage });

// API Routes
fileRouter.post('/upload', upload.single('file'), uploadFile);
fileRouter.get('/content/:filename', getFileContent);

export default fileRouter;
