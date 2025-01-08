const { body } = require('express-validator');

const validateFileUpload = () => [
  body('file')
    .notEmpty()
    .withMessage('File is required'),
  body('fileType')
    .notEmpty()
    .withMessage('File type is required')
    .isIn(['image', 'video', 'document'])
    .withMessage('File type must be one of: image, video, document'),
];

module.exports = { validateFileUpload };
