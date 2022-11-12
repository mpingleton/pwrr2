const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const parseIdentifier = require('../identifiers/parseIdentifier');
const groupIdentifier = require('../identifiers/groupIdentifier');
const projectIdentifier = require('../identifiers/projectIdentifier');
const taskIdentifier = require('../identifiers/taskIdentifier');

module.exports = async (groupId) => {
    const data = await prisma.groupNotification.findMany({
        where: {
            groupId: parseIdentifier(groupId),
        },
    });

    const notificationData = data.map((notification) => ({
        id: notification.id,
        groupId: groupIdentifier(notification.groupId),
        projectId: projectIdentifier(notification.projectId),
        taskId: taskIdentifier(notification.taskId),
        action: notification.action,
        timestamp: notification.timestamp,
        dismissed: notification.dismissed,
    }));

    return notificationData;
};