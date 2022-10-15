const startTaskById = require('../../services/tasks/startTaskById');

module.exports = async (req, res) => {
    const taskData = await startTaskById(req.params.taskId, req.user.id, new Date());
    res.send(200, taskData);
};