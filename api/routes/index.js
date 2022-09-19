const express = require('express');

const authRoute = require('./auth');
const projectsRoute = require('./projects');

const router = express.Router();

router.use('/auth', authRoute);
router.use('/projects', projectsRoute);

module.exports = router;