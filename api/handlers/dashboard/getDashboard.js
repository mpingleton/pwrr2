const getGroupAssignmentsByUser = require('../../services/groups/getGroupAssignmentsByUser');
const getGroupById = require('../../services/groups/getGroupById');
const getProjectsInGroup = require('../../services/projects/getProjectsInGroup');
const getTasksInGroup = require('../../services/tasks/getTasksInGroup');

module.exports = async (req, res) => {
    // Get all of the groups that the user is assigned to.
    const groupAssignments = await getGroupAssignmentsByUser(req.user.id);
    
    // Get all of the projects for each group.
    const getGroupAndProjectData = async (groupId) => {
        const groupData = await getGroupById(groupId);
        const projectsData = await getProjectsInGroup(groupId);
        const tasksData = await getTasksInGroup(groupId);

        return {
            group: groupData,
            projects: projectsData,
            tasks: tasksData,
        };
    };

    const groupProjects = await Promise.all(groupAssignments.map((groupId) => getGroupAndProjectData(groupId)));
    
    res.send(200, groupProjects);
};