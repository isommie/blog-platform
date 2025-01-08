const { sendEmail } = require('../utils/email');

const sendWelcomeEmail = async (to, username) => {
  const subject = 'Welcome to Our Blog Platform!';
  const text = `Hello ${username}, welcome to our blogging platform!`;
  const html = `<h1>Hello ${username}</h1><p>Welcome to our blogging platform!</p>`;

  try {
    await sendEmail({ to, subject, text, html });
    console.log(`Welcome email sent to ${to}`);
  } catch (error) {
    console.error('Error sending welcome email:', error);
    throw error;
  }
};

const sendNotificationEmail = async (to, subject, message) => {
  try {
    await sendEmail({ to, subject, text: message });
    console.log(`Notification email sent to ${to}`);
  } catch (error) {
    console.error('Error sending notification email:', error);
    throw error;
  }
};

module.exports = { sendWelcomeEmail, sendNotificationEmail };
