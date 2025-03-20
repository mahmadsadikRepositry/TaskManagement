import expres from "express";
import multer from "multer";

const fileRouter = expres.Router();

const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    console.log("File", file);
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage });

//Api routes
fileRouter.post("/upload", upload.single("file"));
