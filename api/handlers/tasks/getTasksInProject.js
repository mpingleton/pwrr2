const getTasksForProject = require('../../services/tasks/getTasksForProject');

module.exports = async (req, res) => {
    const tasksData = await getTasksForProject(req.params.projectId);
    res.send(200, {
        numberTasks: tasksData.length,
        data: tasksData,
    });
};