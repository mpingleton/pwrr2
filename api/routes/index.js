const express = require('express');

const authRoute = require('./auth');
const projectsRoute = require('./projects');
const contactsRoute = require('./contacts');

const router = express.Router();

router.use('/auth', authRoute);
router.use('/projects', projectsRoute);
router.use('/contacts', contactsRoute);

module.exports = router;