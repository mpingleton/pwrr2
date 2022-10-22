const getTasksInGroup = require('../../services/tasks/getTasksInGroup');
const getDependentTasksForTask = require('../../services/tasks/getDependentTasksForTask');
const getIndependentTasksForTask = require('../../services/tasks/getIndependentTasksForTask');

module.exports = async (req, res) => {
    const tasksData = await getTasksInGroup(req.params.groupId);

    res.send(200, {
        numberTasks: tasksData.length,
        data: tasksData,
    });
};