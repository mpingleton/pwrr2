const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const parseIdentifier = require('../identifiers/parseIdentifier');
const groupIdentifier = require('../identifiers/groupIdentifier');
const projectIdentifier = require('../identifiers/projectIdentifier');
const taskIdentifier = require('../identifiers/taskIdentifier');

module.exports = async (groupId, projectId, taskId, action, timestamp) => {
    const data = await prisma.groupNotification.create({
        data: {
            groupId: parseIdentifier(groupId),
            projectId: parseIdentifier(projectId),
            taskId: parseIdentifier(taskId),
            action: action,
            timestamp: timestamp,
        },
    });

    const notificationData = {
        id: data.id,
        groupId: groupIdentifier(data.groupId),
        projectId: projectIdentifier(data.projectId),
        taskId: taskIdentifier(data.taskId),
        action: data.action,
        timestamp: data.timestamp,
        dismissed: data.dismissed,
    };

    return notificationData;
};