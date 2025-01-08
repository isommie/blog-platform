const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema(
  {
    filename: {
      type: String,
      required: true,
      trim: true,
    },
    filepath: {
      type: String, // Cloudinary URL or local file path
      required: true,
    },
    mimetype: {
      type: String,
      required: true,
    },
    size: {
      type: Number, // File size in bytes
      required: true,
    },
    uploader: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // User who uploaded the file
      required: true,
    },
    purpose: {
      type: String, // e.g., 'profile', 'blog-image', 'document'
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('File', fileSchema);
