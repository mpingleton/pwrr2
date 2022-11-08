const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const parseIdentifier = require('../identifiers/parseIdentifier');
const projectIdentifier = require('../identifiers/projectIdentifier');
const groupIdentifier = require('../identifiers/groupIdentifier');
const taskIdentifier = require('../identifiers/taskIdentifier');

module.exports = async (taskId) => {
    const data = await prisma.task.findUnique({
        where: {
            id: parseIdentifier(taskId),
        },
    });

    const taskData = {
        id: taskIdentifier(data.id),
        projectId: projectIdentifier(data.projectId),
        groupId: groupIdentifier(data.groupId),
        userId: data.userId,
        dueDate: data.dueDate,
        startedDate: data.startedDate,
        startedBy: data.startedBy,
        pausedDate: data.pausedDate,
        pausedBy: data.pausedBy,
        completedDate: data.completedDate,
        completedBy: data.completedBy,
        cancelledDate: data.cancelledDate,
        cancelledBy: data.cancelledBy,
        description: data.description,
    };

    return taskData;
};