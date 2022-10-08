const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const parseIdentifier = require('../identifiers/parseIdentifier');
const projectIdentifier = require('../identifiers/projectIdentifier');

module.exports = async (projectId) => {
    const data = await prisma.projectFile.findMany({
        where: {
            projectId: parseIdentifier(projectId),
        },
    });

    const attachmentData = data.map((attachment) => ({
        id: attachment.id,
        projectId: projectIdentifier(attachment.projectId),
        filename: attachment.filename,
        description: attachment.description,
        checksum: attachment.checksum,
        byteSize: attachment.byteSize,
        submitterId: attachment.submitterId,
        timestamp: attachment.timestamp,
    }));

    return attachmentData;
};