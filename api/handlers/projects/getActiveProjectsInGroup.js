const getProjectsInGroup = require('../../services/projects/getProjectsInGroup');

module.exports = async (req, res) => {
    const unfilteredProjects = await getProjectsInGroup(req.params.groupId);

    const filteredProjects = unfilteredProjects.filter((project) => (project.completedDate === null && project.cancelledDate === null));

    res.send(200, {
        numberTasks: filteredProjects.length,
        data: filteredProjects,
    });
};