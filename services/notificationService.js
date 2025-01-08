const Notification = require('../models/Notification');

const createNotification = async ({ recipient, type, message, relatedEntity }) => {
  try {
    const notification = new Notification({
      recipient,
      type,
      message,
      relatedEntity,
    });
    await notification.save();
    return notification;
  } catch (error) {
    console.error('Error creating notification:', error);
    throw error;
  }
};

const getUserNotifications = async (userId) => {
  try {
    const notifications = await Notification.find({ recipient: userId })
      .sort({ createdAt: -1 })
      .exec();
    return notifications;
  } catch (error) {
    console.error('Error fetching user notifications:', error);
    throw error;
  }
};

module.exports = { createNotification, getUserNotifications };
