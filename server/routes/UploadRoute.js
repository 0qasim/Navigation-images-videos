const { Router } = require("express");
const UploadModel = require("../models/UploadModel");
const uploadMiddleware = require("../middlwares/MulterMiddleware");
const router = Router();

router.post("/api/save", uploadMiddleware.single("file"), async (req, res) => {
  try {
    const filename = req.file.filename;
    const fileType = req.file.mimetype.startsWith("video") ? "video" : "photo";

    const media = await UploadModel.create({ filename, fileType });
    
    console.log("Upload Successfully");
    console.log(media);

    res.status(201).json(media);
  } catch (err) {
    console.error("Error during upload:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/api/get", async (req, res) => {
  try {
    const allMedia = await UploadModel.find().sort({ createdAt: "descending" });
    res.json(allMedia);
  } catch (err) {
    console.error("Error while retrieving media:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
