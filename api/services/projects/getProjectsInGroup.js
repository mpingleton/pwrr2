const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const parseIdentifier = require('../identifiers/parseIdentifier');
const projectIdentifier = require('../identifiers/projectIdentifier');
const groupIdentifier = require('../identifiers/groupIdentifier');

module.exports = async (groupId) => {
    const data = await prisma.project.findMany({
        where: {
            ownerId: parseIdentifier(groupId),
        },
    });

    const projectData = data.map((project) => ({
        id: projectIdentifier(project.id),
        ownerId: groupIdentifier(project.ownerId),
        title: project.title,
        supportsMissionSystem: project.supportsMissionSystem,
        requirement: project.requirement,
        justification: project.justification,
        proposedTechnicalSolution: project.proposedTechnicalSolution,
        taskless: project.taskless,
        dueDate: project.dueDate,
        submittedDate: project.submittedDate,
        submittedBy: project.submittedBy,
        completedDate: project.completedDate,
        completedBy: project.completedBy,
        cancelledDate: project.cancelledDate,
        cancelledBy: project.cancelledBy
    }));

    return projectData;
};