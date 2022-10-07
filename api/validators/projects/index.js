const addComment = require('./addComment');
const cancelProject = require('./cancelProject');
const completeProject = require('./completeProject');
const advanceProjectStage = require('./advanceProjectStage');
const getProjectById = require('./getProjectById');
const getProjectsInGroup = require('./getProjectsInGroup');
const createProject = require('./createProject');

module.exports = {
    addComment,
    cancelProject,
    completeProject,
    advanceProjectStage,
    getProjectById,
    getProjectsInGroup,
    createProject,
};