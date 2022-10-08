const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const parseIdentifier = require('../identifiers/parseIdentifier');
const projectIdentifier = require('../identifiers/projectIdentifier');
const groupIdentifier = require('../identifiers/groupIdentifier');
const taskIdentifier = require('../identifiers/taskIdentifier');

module.exports = async (projectId) => {
    const data = await prisma.task.findMany({
        where: {
            projectId: parseIdentifier(projectId),
        },
    });

    const taskData = data.map((task) => ({
        id: taskIdentifier(task.id),
        projectId: projectIdentifier(task.projectId),
        groupId: groupIdentifier(task.groupId),
        dueDate: task.dueDate,
        completedDate: task.completedDate,
        details: task.details,
    }));

    return taskData;
};