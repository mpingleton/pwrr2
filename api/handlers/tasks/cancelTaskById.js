const cancelTaskById = require('../../services/tasks/cancelTaskById');

module.exports = async (req, res) => {
    const taskData = await cancelTaskById(req.params.taskId, req.user.id, new Date());
    res.send(200, taskData);
};