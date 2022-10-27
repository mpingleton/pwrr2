const resumeTaskById = require('./resumeTaskById');
const startTaskById = require('./startTaskById');
const pauseTaskById = require('./pauseTaskById');
const cancelTaskById = require('./cancelTaskById');
const completeTaskById = require('./completeTaskById');
const createTask = require('./createTask');
const getTaskById = require('./getTaskById');
const getTasksInProject = require('./getTasksInProject');
const getTasksInGroup = require('./getTasksInGroup');
const getActiveTasksInGroup = require('./getActiveTasksInGroup');

module.exports = {
    resumeTaskById,
    startTaskById,
    pauseTaskById,
    cancelTaskById,
    completeTaskById,
    createTask,
    getTaskById,
    getTasksInProject,
    getTasksInGroup,
    getActiveTasksInGroup,
};