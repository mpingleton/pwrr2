const express = require('express');

const session = require('../middleware/session');
const notificationsHandlers = require('../handlers/notifications');

const validator = require('../middleware/validator');
const notificationsValidators = require('../validators/notifications');

const router = express.Router();

router.get('/', session(), notificationsHandlers.getMyNotifications);
router.post('/id/:notificationId/dismiss', session(), validator(notificationsValidators.dismissNotification), notificationsHandlers.dismissNotification);

module.exports = router;