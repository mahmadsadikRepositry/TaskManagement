import fs from 'fs';
import path from 'path';

// ✅ Handle File Upload
export const uploadFile = (req, res) => {
  if (!req.file) return res.status(400).json({ message: 'No file uploaded' });

  res.json({
    message: 'File uploaded successfully',
    filename: req.file.filename
  });
};

// ✅ Read File Content
export const getFileContent = (req, res) => {
  const filePath = path.join('./uploads/', req.params.filename);
  console.log("filePath",filePath);
  
  // Read file contents
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ message: 'Error reading file' });

    res.json({ content: data });
  });
};
