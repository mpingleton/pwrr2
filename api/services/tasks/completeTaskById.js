const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const parseIdentifier = require('../identifiers/parseIdentifier');
const projectIdentifier = require('../identifiers/projectIdentifier');
const groupIdentifier = require('../identifiers/groupIdentifier');
const taskIdentifier = require('../identifiers/taskIdentifier');

module.exports = async (taskId, userId, timestamp) => {
    const returnData = await prisma.task.update({
        where: {
            id: parseIdentifier(taskId),
        },
        data: {
            completedBy: userId,
            completedDate: timestamp,
        },
    });

    const taskData = {
        id: taskIdentifier(returnData.id),
        projectId: projectIdentifier(returnData.projectId),
        groupId: groupIdentifier(returnData.groupId),
        dueDate: returnData.dueDate,
        startedDate: returnData.startedDate,
        startedBy: returnData.startedBy,
        pausedDate: returnData.pausedDate,
        pausedBy: returnData.pausedBy,
        completedDate: returnData.completedDate,
        completedBy: returnData.completedBy,
        cancelledDate: returnData.cancelledDate,
        cancelledBy: returnData.cancelledBy,
        description: returnData.description,
    };

    return taskData;
};