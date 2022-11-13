const insertTask = require('../../services/tasks/insertTask');
const insertNotification = require('../../services/notifications/insertNotification');

module.exports = async (req, res) => {
    const returnData = await insertTask({
        projectId: req.body.projectId,
        groupId: req.body.groupId,
        dueDate: new Date(req.body.dueDate),
        description: req.body.description,
    });

    await insertNotification(
        returnData.groupId,
        returnData.projectId,
        returnData.id,
        "NEW_TASK",
        new Date(),
    );

    res.send(201, returnData);
};