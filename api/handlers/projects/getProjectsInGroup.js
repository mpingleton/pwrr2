const getProjectsInGroup = require('../../services/projects/getProjectsInGroup');

module.exports = async (req, res) => {
    const projectData = await getProjectsInGroup(Number.parseInt(req.params.groupId));
    res.send(200, {
        numberProjects: projectData.length,
        data: projectData,
    });
};