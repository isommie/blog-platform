const dotenv = require('dotenv');

dotenv.config();

const serverConfig = {
  port: process.env.PORT || 5000,
  environment: process.env.NODE_ENV || 'development',
};

module.exports = serverConfig;
