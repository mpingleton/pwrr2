const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = async (data) => {
    await prisma.project.create({
        data: {
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
        },
    });
};