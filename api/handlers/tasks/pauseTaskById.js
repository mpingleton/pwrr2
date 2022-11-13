const pauseTaskById = require('../../services/tasks/pauseTaskById');
const insertNotification = require('../../services/notifications/insertNotification');

module.exports = async (req, res) => {
    const taskData = await pauseTaskById(req.params.taskId, req.user.id, new Date());

    await insertNotification(
        taskData.groupId,
        taskData.projectId,
        taskData.id,
        "PAUSE_TASK",
        new Date(),
    );

    res.send(200, taskData);
};