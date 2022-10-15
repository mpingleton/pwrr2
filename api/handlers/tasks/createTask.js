const insertTask = require('../../services/tasks/insertTask');

module.exports = async (req, res) => {
    const returnData = await insertTask({
        projectId: req.body.projectId,
        groupId: req.body.groupId,
        dueDate: new Date(req.body.dueDate),
        description: req.body.description,
    });

    res.send(201, returnData);
};