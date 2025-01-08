const cloudinary = require('../config/cloudinary');

const uploadFile = async (req, res) => {
  try {
    const { file } = req.files; // Assuming `express-fileupload` is used
    const result = await cloudinary.uploader.upload(file.tempFilePath);
    res.status(201).json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = { uploadFile };
