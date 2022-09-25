const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const projectIdentifier = require('../identifiers/projectIdentifier');

module.exports = async (data) => {
    const returnData = await prisma.project.create({
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

    const projectData = {
        id: projectIdentifier(returnData.id),
        ownerId: returnData.ownerId,
        title: returnData.title,
        supportsMissionSystem: returnData.supportsMissionSystem,
        requirement: returnData.requirement,
        justification: returnData.justification,
        proposedTechnicalSolution: returnData.proposedTechnicalSolution,
        taskless: returnData.taskless,
        dueDate: returnData.dueDate,
        submittedDate: returnData.submittedDate,
        submittedBy: returnData.submittedBy,
        completedDate: returnData.completedDate,
        completedBy: returnData.completedBy,
        cancelledDate: returnData.cancelledDate,
        cancelledBy: returnData.cancelledBy
    };
    
    return projectData;
};