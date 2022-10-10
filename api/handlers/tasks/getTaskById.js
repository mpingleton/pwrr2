const getTaskById = require('../../services/tasks/getTaskById');
const getDependentTasksForTask = require('../../services/tasks/getDependentTasksForTask');
const getIndependentTasksForTask = require('../../services/tasks/getIndependentTasksForTask');

module.exports = async (req, res) => {
    const taskData = await getTaskById(req.params.taskId);
    //taskData.dependentTasks = await getDependentTasksForTask(taskData.id);
    //taskData.independentTasks = await getIndependentTasksForTask(taskData.id);

    taskData.dependentTasks = await getDependentTasksForTask(taskData.id)
                                        .then((tasks) => Promise.all(tasks.map((task) => getTaskById(task))));
    taskData.independentTasks = await getIndependentTasksForTask(taskData.id)
                                        .then((tasks) => Promise.all(tasks.map((task) => getTaskById(task))));

    res.send(200, taskData);
};