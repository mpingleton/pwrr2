const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const parseIdentifier = require('../identifiers/parseIdentifier');
const projectIdentifier = require('../identifiers/projectIdentifier');

module.exports = async (projectId) => {
    const data = await prisma.projectComment.findMany({
        where: {
            projectId: parseIdentifier(projectId),
        },
    });

    const commentData = data.map((comment) => ({
        id: comment.id,
        projectId: projectIdentifier(comment.projectId),
        userId: comment.userId,
        timestamp: comment.timestamp,
        comment: comment.comment,
    }));

    return commentData;
};