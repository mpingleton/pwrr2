const express = require('express');

const session = require('../middleware/session');
const projectsHandlers = require('../handlers/projects');

const validator = require('../middleware/validator');
const projectsValidators = require('../validators/projects');

const router = express.Router();

router.get('/id/:projectId', session(), validator(projectsValidators.getProjectById), projectsHandlers.getProjectById);
router.get('/in/group/:groupId', session(), validator(projectsValidators.getProjectsInGroup), projectsHandlers.getProjectsInGroup);

module.exports = router;