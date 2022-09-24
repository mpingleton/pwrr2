const express = require('express');

const authRoute = require('./auth');
const projectsRoute = require('./projects');
const contactsRoute = require('./contacts');
const organizationsRoute = require('./organizations');

const router = express.Router();

router.use('/auth', authRoute);
router.use('/projects', projectsRoute);
router.use('/contacts', contactsRoute);
router.use('/organizations', organizationsRoute);

module.exports = router;