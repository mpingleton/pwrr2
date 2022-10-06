const cancelProject = require('../../services/projects/cancelProject');

module.exports = async (req, res) => {
    const projectData = await cancelProject(req.params.projectId, req.user.id, new Date());
    res.send(200, projectData);
};