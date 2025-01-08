const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema(
  {
    recipient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // User receiving the notification
      required: true,
    },
    type: {
      type: String, // e.g., 'comment', 'like', 'follow', 'system'
      required: true,
    },
    message: {
      type: String, // Notification message
      required: true,
    },
    isRead: {
      type: Boolean,
      default: false,
    },
    relatedEntity: {
      type: mongoose.Schema.Types.ObjectId, // Optional: Link to related blog post, comment, etc.
      refPath: 'entityModel',
    },
    entityModel: {
      type: String, // e.g., 'BlogPost', 'Comment', 'User'
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Notification', notificationSchema);
