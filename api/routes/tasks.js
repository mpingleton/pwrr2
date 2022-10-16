const express = require('express');

const session = require('../middleware/session');
const tasksHandlers = require('../handlers/tasks');

const validator = require('../middleware/validator');
const tasksValidators = require('../validators/tasks');

const router = express.Router();

router.post('/id/:taskId/start', session(), validator(tasksValidators.startTaskById), tasksHandlers.startTaskById);
router.post('/id/:taskId/complete', session(), validator(tasksValidators.completeTaskById), tasksHandlers.completeTaskById);
router.post('/id/:taskId/pause', session(), validator(tasksValidators.pauseTaskById), tasksHandlers.pauseTaskById);
router.post('/id/:taskId/resume', session(), validator(tasksValidators.resumeTaskById), tasksHandlers.resumeTaskById);
router.post('/id/:taskId/cancel', session(), validator(tasksValidators.cancelTaskById), tasksHandlers.cancelTaskById);
router.get('/id/:taskId', session(), validator(tasksValidators.getTaskById), tasksHandlers.getTaskById);
router.get('/in/project/:projectId', session(), validator(tasksValidators.getTasksInProject), tasksHandlers.getTasksInProject);
router.put('/', session(), validator(tasksValidators.createTask), tasksHandlers.createTask);

module.exports = router;