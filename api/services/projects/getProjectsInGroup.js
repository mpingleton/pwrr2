const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = async (groupId) => {
    const data = await prisma.project.findMany({
        where: {
            ownerId: groupId,
        },
    });

    const projectData = data.map((project) => ({
        id: project.id,
        ownerId: project.ownerId,
        title: project.title,
        supportsMissionSystem: project.supportsMissionSystem,
        requirement: project.requirement,
        justification: project.justification,
        proposedTechnicalSolution: project.proposedTechnicalSolution,
        taskless: project.taskless,
        submittedDate: project.submittedDate,
        validatedDate: project.validatedDate,
        plannedDate: project.plannedDate,
        implementedDate: project.implementedDate,
        cancelledDate: project.cancelledDate,
        validationDueDate: project.validationDueDate,
        planningDueDate: project.planningDueDate,
        implementationDueDate: project.implementationDueDate,
    }));

    return projectData;
};