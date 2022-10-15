const completeTaskById = require('../../services/tasks/completeTaskById');

module.exports = async (req, res) => {
    const taskData = await completeTaskById(req.params.taskId, req.user.id, new Date());
    res.send(200, taskData);
};