const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = async (projectId) => {
    const data = await prisma.project.findUnique({
        where: {
            id: projectId,
        },
    });

    const projectData = {
        id: data.id,
        ownerId: data.ownerId,
        title: data.title,
        supportsMissionSystem: data.supportsMissionSystem,
        requirement: data.requirement,
        justification: data.justification,
        proposedTechnicalSolution: data.proposedTechnicalSolution,
        taskless: data.taskless,
        dueDate: data.dueDate,
        submittedDate: data.submittedDate,
        submittedBy: data.submittedBy,
        completedDate: data.completedDate,
        completedBy: data.completedBy,
        cancelledDate: data.cancelledDate,
        cancelledBy: data.cancelledBy
    };
    
    return projectData;
};