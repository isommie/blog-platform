const { body } = require('express-validator');

const validateComment = () => [
  body('content')
    .notEmpty()
    .withMessage('Comment content is required')
    .isLength({ min: 3 })
    .withMessage('Comment must be at least 3 characters long'),
  body('author')
    .notEmpty()
    .withMessage('Author is required'),
  body('blogPostId')
    .notEmpty()
    .withMessage('Blog post ID is required')
    .isMongoId()
    .withMessage('Invalid blog post ID'),
];

module.exports = { validateComment };
