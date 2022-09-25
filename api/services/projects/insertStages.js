const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const parseIdentifier = require('../identifiers/parseIdentifier');
const projectIdentifier = require('../identifiers/projectIdentifier');

module.exports = async (projectId, data) => {
    const promises = data.map((stage) => prisma.projectStage.create({
        data: {
            projectId: parseIdentifier(projectId),
            description: stage.description,
            sequence: stage.sequence,
            dueDate: stage.dueDate,
        },
    }));

    const returnData = await Promise.all(promises);

    const stageData = returnData.map((stage) => ({
        id: stage.id,
        projectId: projectIdentifier(stage.projectId),
        description: stage.description,
        sequence: stage.sequence,
        dueDate: stage.dueDate,
        startedDate: stage.startedDate,
        startedBy: stage.startedBy,
        completedDate: stage.completedDate,
        completedBy: stage.completedBy,
    }));

    return stageData;
};