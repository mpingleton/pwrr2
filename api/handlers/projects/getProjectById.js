const getProjectById = require('../../services/projects/getProjectById');
const getStagesForProject = require('../../services/projects/getStagesForProject');

module.exports = async (req, res) => {
    const projectData = await getProjectById(Number.parseInt(req.params.projectId));
    projectData.stages = await getStagesForProject(projectData.id);
    res.send(200, projectData);
};