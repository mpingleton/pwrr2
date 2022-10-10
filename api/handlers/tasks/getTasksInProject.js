const getTasksForProject = require('../../services/tasks/getTasksForProject');
const getDependentTasksForTask = require('../../services/tasks/getDependentTasksForTask');
const getIndependentTasksForTask = require('../../services/tasks/getIndependentTasksForTask');

module.exports = async (req, res) => {
    const tasksData = await getTasksForProject(req.params.projectId);

    const promisesDependentTasks = tasksData.map((task) => {
        return getDependentTasksForTask(task.id)
                .then((tasks) => {
                    task.dependentTasks = tasks;
                });
    });

    const promisesIndependentTasks = tasksData.map((task) => {
        return getIndependentTasksForTask(task.id)
                .then((tasks) => {
                    task.independentTasks = tasks;
                });
    })

    await Promise.all(promisesDependentTasks);
    await Promise.all(promisesIndependentTasks);

    res.send(200, {
        numberTasks: tasksData.length,
        data: tasksData,
    });
};