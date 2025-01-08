const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, '../logs/access.log');

const loggerMiddleware = (req, res, next) => {
  const logMessage = `${new Date().toISOString()} - ${req.method} ${req.originalUrl} - ${req.ip}\n`;

  // Append log to a file
  fs.appendFile(logFilePath, logMessage, (err) => {
    if (err) console.error('Failed to log request:', err);
  });

  console.log(logMessage.trim());
  next();
};

module.exports = loggerMiddleware;
