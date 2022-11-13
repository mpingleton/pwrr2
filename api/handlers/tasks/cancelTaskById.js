const cancelTaskById = require('../../services/tasks/cancelTaskById');
const insertNotification = require('../../services/notifications/insertNotification');

module.exports = async (req, res) => {
    const taskData = await cancelTaskById(req.params.taskId, req.user.id, new Date());

    await insertNotification(
        taskData.groupId,
        taskData.projectId,
        taskData.id,
        "CANCEL_TASK",
        new Date(),
    );

    res.send(200, taskData);
};