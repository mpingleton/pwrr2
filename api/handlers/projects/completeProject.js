const completeProject = require('../../services/projects/completeProject');

module.exports = async (req, res) => {
    const projectData = await completeProject(req.params.projectId, req.user.id, new Date());
    res.send(200, projectData);
};