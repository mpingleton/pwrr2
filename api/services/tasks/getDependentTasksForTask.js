const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const parseIdentifier = require('../identifiers/parseIdentifier');
const taskIdentifier = require('../identifiers/taskIdentifier');

module.exports = async (taskId) => {
    const data = await prisma.taskDependency.findMany({
        where: {
            independentTaskId: parseIdentifier(taskId),
        },
    });

    const taskData = data.map((task) => taskIdentifier(task.dependentTaskId));

    return taskData;
};