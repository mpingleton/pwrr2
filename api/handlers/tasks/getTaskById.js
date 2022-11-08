const getTaskById = require('../../services/tasks/getTaskById');
const getGroupById = require('../../services/groups/getGroupById');
const getProjectById = require('../../services/projects/getProjectById');
const getSafeUserById = require('../../services/users/getSafeUserById');
const getDependentTasksForTask = require('../../services/tasks/getDependentTasksForTask');
const getIndependentTasksForTask = require('../../services/tasks/getIndependentTasksForTask');

module.exports = async (req, res) => {
    const taskData = await getTaskById(req.params.taskId);
    
    taskData.groupData = await getGroupById(taskData.groupId);
    taskData.projectData = await getProjectById(taskData.projectId);
    if (taskData.userId !== null) {
        taskData.userData = await getSafeUserById(taskData.userId);
    }
    taskData.dependentTasks = await getDependentTasksForTask(taskData.id)
                                        .then((tasks) => Promise.all(tasks.map((task) => getTaskById(task))));
    taskData.independentTasks = await getIndependentTasksForTask(taskData.id)
                                        .then((tasks) => Promise.all(tasks.map((task) => getTaskById(task))));

    res.send(200, taskData);
};