const resumeTaskById = require('../../services/tasks/resumeTaskById');
const insertNotification = require('../../services/notifications/insertNotification');

module.exports = async (req, res) => {
    const taskData = await resumeTaskById(req.params.taskId, req.user.id, new Date());

    await insertNotification(
        taskData.groupId,
        taskData.projectId,
        taskData.id,
        "RESUM_TASK",
        new Date(),
    );

    res.send(200, taskData);
};