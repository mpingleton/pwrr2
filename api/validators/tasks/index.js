const startTaskById = require('./startTaskById');
const completeTaskById = require('./completeTaskById');
const cancelTaskById = require('./cancelTaskById');
const pauseTaskById = require('./pauseTaskById');
const createTask = require('./createTask');
const getTaskById = require('./getTaskById');
const getTasksInProject = require('./getTasksInProject');

module.exports = {
    startTaskById,
    completeTaskById,
    cancelTaskById,
    pauseTaskById,
    createTask,
    getTaskById,
    getTasksInProject,
};