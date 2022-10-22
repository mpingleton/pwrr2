const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const parseIdentifier = require('../identifiers/parseIdentifier');
const taskIdentifier = require('../identifiers/taskIdentifier');
const projectIdentifier = require('../identifiers/projectIdentifier');
const groupIdentifier = require('../identifiers/groupIdentifier');

module.exports = async (groupId) => {
    const data = await prisma.task.findMany({
        where: {
            groupId: parseIdentifier(groupId),
        },
    });

    const taskData = data.map((task) => ({
        id: taskIdentifier(task.id),
        projectId: projectIdentifier(task.projectId),
        groupId: groupIdentifier(task.groupId),
        dueDate: task.dueDate,
        startedDate: task.startedDate,
        startedBy: task.startedBy,
        pausedDate: task.pausedDate,
        pausedBy: task.pausedBy,
        completedDate: task.completedDate,
        completedBy: task.completedBy,
        cancelledDate: task.cancelledDate,
        cancelledBy: task.cancelledBy,
        description: task.description,
    }));

    return taskData;
};