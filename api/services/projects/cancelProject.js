const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const parseIdentifier = require('../identifiers/parseIdentifier');
const projectIdentifier = require('../identifiers/projectIdentifier');
const groupIdentifier = require('../identifiers/groupIdentifier');

module.exports = async (projectId, userId, timestamp) => {
    const returnData = await prisma.project.update({
        where: {
            id: parseIdentifier(projectId),
        },
        data: {
            cancelledBy: userId,
            cancelledDate: timestamp,
        },
    });

    const projectData = {
        id: projectIdentifier(returnData.id),
        ownerId: groupIdentifier(returnData.ownerId),
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