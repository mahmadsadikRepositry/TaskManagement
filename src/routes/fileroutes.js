import express from 'express';
import multer from 'multer';

const fileRouter = express.Router();

const storage = multer.diskStorage({
    destination: './uploads',
    filename:(req,file,cb) =>{
        console.log("File", file);
        cb(null, '$Date.now()}_${file.originalname}')
    }
})


const upload = muler({storage});
//API ROutes
fileRouter.post('/upload', upload.single('file'))