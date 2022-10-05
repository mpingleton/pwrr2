const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const projectIdentifier = require('../identifiers/projectIdentifier');

module.exports = async (stageId, userId, timestamp) => {
    const returnData = await prisma.projectStage.update({
        where: {
            id: stageId,
        },
        data: {
            startedBy: userId,
            startedDate: timestamp,
        },
    });

    const stageData = {
        id: returnData.id,
        projectId: projectIdentifier(returnData.projectId),
        description: returnData.description,
        sequence: returnData.sequence,
        dueDate: returnData.dueDate,
        startedDate: returnData.startedDate,
        startedBy: returnData.startedBy,
        completedDate: returnData.completedDate,
        completedBy: returnData.completedBy,
    };

    return stageData;
};