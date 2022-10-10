const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const parseIdentifier = require('../identifiers/parseIdentifier');
const taskIdentifier = require('../identifiers/taskIdentifier');

module.exports = async (taskId) => {
    const data = await prisma.taskDependency.findMany({
        where: {
            dependentTaskId: parseIdentifier(taskId),
        },
    });

    const taskData = data.map((task) => taskIdentifier(task.independentTaskId));

    return taskData;
};