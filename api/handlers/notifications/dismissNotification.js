const dismissNotification = require('../../services/notifications/dismissNotification');

module.exports = async (req, res) => {
    const notification = await dismissNotification(Number.parseInt(req.params.notificationId));
    res.send(200, notification);
};