const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = async (projectId) => {
    const data = await prisma.projectStage.findMany({
        where: {
            projectId: projectId,
        },
    });

    const stageData = data.map((stage) => ({
        id: stage.id,
        projectId: stage.projectId,
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