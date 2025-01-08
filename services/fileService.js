const cloudinary = require('../config/cloudinary');

// Upload a single file to Cloudinary
const uploadFile = async (filePath) => {
  try {
    const result = await cloudinary.uploader.upload(filePath);
    return result;
  } catch (error) {
    console.error('Error uploading file to Cloudinary:', error);
    throw new Error('File upload failed');
  }
};

// Upload multiple files to Cloudinary
const uploadMultipleFiles = async (filePaths) => {
  try {
    const uploadPromises = filePaths.map((path) => cloudinary.uploader.upload(path));
    const results = await Promise.all(uploadPromises);
    return results;
  } catch (error) {
    console.error('Error uploading multiple files to Cloudinary:', error);
    throw new Error('Multiple file uploads failed');
  }
};

// Delete a file from Cloudinary by public ID
const deleteFile = async (publicId) => {
  try {
    const result = await cloudinary.uploader.destroy(publicId);
    return result;
  } catch (error) {
    console.error('Error deleting file from Cloudinary:', error);
    throw new Error('File deletion failed');
  }
};

module.exports = {
  uploadFile,
  uploadMultipleFiles,
  deleteFile,
};
