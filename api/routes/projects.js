const express = require('express');

const session = require('../middleware/session');
const projectsHandlers = require('../handlers/projects');

const validator = require('../middleware/validator');
const projectsValidators = require('../validators/projects');

const router = express.Router();

router.post('/id/:projectId/cancel', session(), validator(projectsValidators.cancelProject), projectsHandlers.cancelProject);
router.post('/id/:projectId/complete', session(), validator(projectsValidators.completeProject), projectsHandlers.completeProject);
router.post('/id/:projectId/advancestage', session(), validator(projectsValidators.advanceProjectStage), projectsHandlers.advanceProjectStage);
router.get('/id/:projectId', session(), validator(projectsValidators.getProjectById), projectsHandlers.getProjectById);
router.get('/in/group/:groupId', session(), validator(projectsValidators.getProjectsInGroup), projectsHandlers.getProjectsInGroup);
router.put('/', session(), validator(projectsValidators.createProject), projectsHandlers.createProject);

module.exports = router;