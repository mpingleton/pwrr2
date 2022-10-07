const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const parseIdentifier = require('../identifiers/parseIdentifier');
const projectIdentifier = require('../identifiers/projectIdentifier');

module.exports = async (projectId, userId, timestamp, comment) => {
    const returnData = await prisma.projectComment.create({
        data: {
            projectId: parseIdentifier(projectId),
            userId: userId,
            timestamp: timestamp,
            comment: comment,
        },
    });

    const commentData = {
        id: returnData.id,
        projectId: projectIdentifier(returnData.projectId),
        userId: returnData.userId,
        timestamp: returnData.timestamp,
        comment: returnData.comment,
    };

    return commentData;
};