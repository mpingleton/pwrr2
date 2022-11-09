const assignTaskToUser = require('../../services/tasks/assignTaskToUser');

module.exports = async (req, res) => {
    const taskData = await assignTaskToUser(req.params.taskId, Number.parseInt(req.params.userId));
    res.send(200, taskData);
};