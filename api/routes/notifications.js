const express = require('express');

const session = require('../middleware/session');
const notificationsHandlers = require('../handlers/notifications');

const router = express.Router();

router.get('/', session(), notificationsHandlers.getMyNotifications);

module.exports = router;