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
        submittedDate: data.submittedDate,
        validatedDate: data.validatedDate,
        plannedDate: data.plannedDate,
        implementedDate: data.implementedDate,
        cancelledDate: data.cancelledDate,
        validationDueDate: data.validationDueDate,
        planningDueDate: data.planningDueDate,
        implementationDueDate: data.implementationDueDate,
    };
    
    return projectData;
};