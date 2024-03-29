const resumeTaskById = require('./resumeTaskById');
const startTaskById = require('./startTaskById');
const completeTaskById = require('./completeTaskById');
const cancelTaskById = require('./cancelTaskById');
const pauseTaskById = require('./pauseTaskById');
const createTask = require('./createTask');
const getTaskById = require('./getTaskById');
const getTasksInProject = require('./getTasksInProject');
const getTasksInGroup = require('./getTasksInGroup');
const getActiveTasksInGroup = require('./getActiveTasksInGroup');
const assignTaskToUser = require('./assignTaskToUser');

module.exports = {
    resumeTaskById,
    startTaskById,
    completeTaskById,
    cancelTaskById,
    pauseTaskById,
    createTask,
    getTaskById,
    getTasksInProject,
    getTasksInGroup,
    getActiveTasksInGroup,
    assignTaskToUser,
};