const express = require('express');

const session = require('../middleware/session');
const tasksHandlers = require('../handlers/tasks');

const validator = require('../middleware/validator');
const tasksValidators = require('../validators/tasks');

const router = express.Router();

router.get('/id/:taskId', session(), validator(tasksValidators.getTaskById), tasksHandlers.getTaskById);
router.get('/in/project/:projectId', session(), validator(tasksValidators.getTasksInProject), tasksHandlers.getTasksInProject);
router.put('/', session(), validator(tasksValidators.createTask), tasksHandlers.createTask);

module.exports = router;