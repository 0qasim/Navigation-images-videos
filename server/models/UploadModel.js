const mongoose = require("mongoose");
const UploadSchema = new mongoose.Schema(
  {
    filename: {
      type: String, // Use String to store the file name
      required: true,
    },
    fileType: {
      type: String, // Add a field to store the file type (photo or video)
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Upload", UploadSchema);
