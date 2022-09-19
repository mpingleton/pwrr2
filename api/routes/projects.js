const express = require('express');

const session = require('../middleware/session');
const projectsHandlers = require('../handlers/projects');

const validator = require('../middleware/validator');
const projectsValidators = require('../validators/projects');

const router = express.Router();

router.get('/id/:projectId', validator(projectsValidators.getProjectById), projectsHandlers.getProjectById);

module.exports = router;