const pauseTaskById = require('../../services/tasks/pauseTaskById');

module.exports = async (req, res) => {
    const taskData = await pauseTaskById(req.params.taskId, req.user.id, new Date());
    res.send(200, taskData);
};