const startTaskById = require('../../services/tasks/startTaskById');
const insertNotification = require('../../services/notifications/insertNotification');

module.exports = async (req, res) => {
    const taskData = await startTaskById(req.params.taskId, req.user.id, new Date());

    await insertNotification(
        taskData.groupId,
        taskData.projectId,
        taskData.id,
        "START_TASK",
        new Date(),
    );

    res.send(200, taskData);
};