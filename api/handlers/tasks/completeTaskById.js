const insertNotification = require('../../services/notifications/insertNotification');
const completeTaskById = require('../../services/tasks/completeTaskById');

module.exports = async (req, res) => {
    const taskData = await completeTaskById(req.params.taskId, req.user.id, new Date());

    await insertNotification(
        taskData.groupId,
        taskData.projectId,
        taskData.id,
        "COMPL_TASK",
        new Date(),
    );

    res.send(200, taskData);
};