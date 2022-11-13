const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const groupIdentifier = require('../identifiers/groupIdentifier');
const projectIdentifier = require('../identifiers/projectIdentifier');
const taskIdentifier = require('../identifiers/taskIdentifier');

module.exports = async (notificationId) => {
    const data = await prisma.groupNotification.update({
        where: {
            id: notificationId,
        },
        data: {
            dismissed: true,
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