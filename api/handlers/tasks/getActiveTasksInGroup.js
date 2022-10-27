const getTasksInGroup = require('../../services/tasks/getTasksInGroup');

module.exports = async (req, res) => {
    const unfilteredTasks = await getTasksInGroup(req.params.groupId);
    
    const filteredTasks = unfilteredTasks.filter((task) => (task.completedDate === null && task.cancelledDate === null));

    res.send(200, {
        numberTasks: filteredTasks,
        data: filteredTasks,
    });
};