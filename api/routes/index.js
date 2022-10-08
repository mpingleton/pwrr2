const express = require('express');

const authRoute = require('./auth');
const projectsRoute = require('./projects');
const tasksRoute = require('./tasks');
const contactsRoute = require('./contacts');
const organizationsRoute = require('./organizations');
const groupsRoute = require('./groups');

const router = express.Router();

router.use('/auth', authRoute);
router.use('/projects', projectsRoute);
router.use('/tasks', tasksRoute);
router.use('/contacts', contactsRoute);
router.use('/organizations', organizationsRoute);
router.use('/groups', groupsRoute);

module.exports = router;