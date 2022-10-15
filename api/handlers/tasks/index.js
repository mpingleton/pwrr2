const startTaskById = require('./startTaskById');
const pauseTaskById = require('./pauseTaskById');
const cancelTaskById = require('./cancelTaskById');
const completeTaskById = require('./completeTaskById');
const createTask = require('./createTask');
const getTaskById = require('./getTaskById');
const getTasksInProject = require('./getTasksInProject');

module.exports = {
    startTaskById,
    pauseTaskById,
    cancelTaskById,
    completeTaskById,
    createTask,
    getTaskById,
    getTasksInProject,
};