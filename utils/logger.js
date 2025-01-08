const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, '..', 'logs', 'application.log');

const log = (message, level = 'INFO') => {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] [${level}]: ${message}\n`;

  console.log(logMessage);

  fs.appendFile(logFilePath, logMessage, (err) => {
    if (err) console.error('Error writing to log file:', err);
  });
};

module.exports = { log };
