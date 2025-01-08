const { body } = require('express-validator');

const validateBlogPost = () => [
  body('title')
    .notEmpty()
    .withMessage('Title is required')
    .isLength({ min: 5 })
    .withMessage('Title must be at least 5 characters long'),
  body('content')
    .notEmpty()
    .withMessage('Content is required')
    .isLength({ min: 20 })
    .withMessage('Content must be at least 20 characters long'),
  body('author')
    .notEmpty()
    .withMessage('Author is required'),
  body('tags')
    .optional()
    .isArray()
    .withMessage('Tags must be an array'),
];

module.exports = { validateBlogPost };
