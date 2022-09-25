const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const parseIdentifier = require('../identifiers/parseIdentifier');
const projectIdentifier = require('../identifiers/projectIdentifier');

module.exports = async (projectId, data) => {
    const promises = data.map((contact) => prisma.projectContact.create({
        data: {
            projectId: parseIdentifier(projectId),
            contactId: contact
        },
    }));

    const returnData = await Promise.all(promises);

    const projectContactData = returnData.map((contact) => ({
        projectId: projectIdentifier(contact.projectId),
        contactId: contact.contactId,
    }));

    return projectContactData;
};