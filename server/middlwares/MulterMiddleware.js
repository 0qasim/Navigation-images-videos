const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const fileType = file.mimetype.startsWith("video") ? "videos" : "uploads";
    cb(null, `./public/${fileType}/`);
  },
  filename: function (req, file, cb) {
    const uniqueFileName = `${uuidv4()}_${path.extname(file.originalname)}`;
    cb(null, uniqueFileName);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png", "video/mp4"];
  
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    // Reject the file with an error message
    cb(new Error("Invalid file type. Only JPEG, PNG, JPG, and MP4 files are allowed."));
  }
};

const uploadMiddleware = multer({ storage, fileFilter });

module.exports = uploadMiddleware;
