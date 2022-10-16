const resumeTaskById = require('../../services/tasks/resumeTaskById');

module.exports = async (req, res) => {
    const taskData = await resumeTaskById(req.params.taskId, req.user.id, new Date());
    res.send(200, taskData);
};