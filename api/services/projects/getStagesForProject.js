const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const parseIdentifier = require('../identifiers/parseIdentifier');
const projectIdentifier = require('../identifiers/projectIdentifier');

module.exports = async (projectId) => {
    const data = await prisma.projectStage.findMany({
        where: {
            projectId: parseIdentifier(projectId),
        },
    });

    const stageData = data.map((stage) => ({
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