const validator = require('validator');

const validateEmail = (email) => {
  return validator.isEmail(email);
};

const validateURL = (url) => {
  return validator.isURL(url);
};

const validatePassword = (password) => {
  // Example: Password must be at least 8 characters, include one number
  return /^(?=.*[0-9])(?=.*[a-zA-Z]).{8,}$/.test(password);
};

module.exports = { validateEmail, validateURL, validatePassword };
