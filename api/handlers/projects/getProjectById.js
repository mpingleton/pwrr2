const getProjectById = require('../../services/projects/getProjectById');

module.exports = async (req, res) => {
    const projectData = await getProjectById(Number.parseInt(req.params.projectId));
    res.send(200, projectData);
};