const express = require('express');

const authRoute = require('./auth');
const projectsRoute = require('./projects');
const tasksRoute = require('./tasks');
const contactsRoute = require('./contacts');
const organizationsRoute = require('./organizations');
const groupsRoute = require('./groups');
const dashboardRoute = require('./dashboard');
const usersRoute = require('./users');
const notificationsRoute = require('./notifications');

const router = express.Router();

router.use('/auth', authRoute);
router.use('/projects', projectsRoute);
router.use('/tasks', tasksRoute);
router.use('/contacts', contactsRoute);
router.use('/organizations', organizationsRoute);
router.use('/groups', groupsRoute);
router.use('/dashboard', dashboardRoute);
router.use('/users', usersRoute);
router.use('/notifications', notificationsRoute);

module.exports = router;