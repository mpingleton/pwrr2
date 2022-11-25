const getGroupAssignmentsByUser = require('../../services/groups/getGroupAssignmentsByUser');
const getGroupById = require('../../services/groups/getGroupById');
const getProjectsInGroup = require('../../services/projects/getProjectsInGroup');
const getTasksInGroup = require('../../services/tasks/getTasksInGroup');

module.exports = async (req, res) => {
    // Get all of the groups that the user is assigned to.
    const groupAssignments = await getGroupAssignmentsByUser(req.user.id);
    
    // Get each group's information.
    const groupData = await Promise.all(groupAssignments.map((groupId) => getGroupById(groupId)));

    // Get all projects in each group.
    const projectData = await Promise.all(groupAssignments.map((groupId) => getProjectsInGroup(groupId)));

    // Get all tasks in each group.
    const taskData = await Promise.all(groupAssignments.map((groupId) => getTasksInGroup(groupId)));

    const responseData = {
        groupData: groupData.flat(),
        projectData: projectData.flat(),
        taskData: taskData.flat(),
    };
    
    res.send(200, responseData);
};