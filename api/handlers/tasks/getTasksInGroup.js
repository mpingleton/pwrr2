const getTasksInGroup = require('../../services/tasks/getTasksInGroup');

module.exports = async (req, res) => {
    const tasksData = await getTasksInGroup(req.params.groupId);

    res.send(200, {
        numberTasks: tasksData.length,
        data: tasksData,
    });
};