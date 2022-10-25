const express = require('express');

const session = require('../middleware/session');
const dashboardHandlers = require('../handlers/dashboard');

const router = express.Router();

router.get('/', session(), dashboardHandlers.getDashboard);

module.exports = router;