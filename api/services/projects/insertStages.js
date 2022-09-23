const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = async (projectId, data) => {
    const promises = data.map((stage) => prisma.projectStage.create({
        data: {
            projectId: projectId,
            description: stage.description,
            sequence: stage.sequence,
            dueDate: stage.dueDate,
        },
    }));

    const returnData = await Promise.all(promises);

    const stageData = returnData.map((stage) => ({
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