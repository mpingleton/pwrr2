const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const parseIdentifier = require('../identifiers/parseIdentifier');
const projectIdentifier = require('../identifiers/projectIdentifier');
const contactIdentifier = require('../identifiers/contactIdentifier');

module.exports = async (projectId, data) => {
    const promises = data.map((contact) => prisma.projectContact.create({
        data: {
            projectId: parseIdentifier(projectId),
            contactId: parseIdentifier(contact),
        },
    }));

    const returnData = await Promise.all(promises);

    const projectContactData = returnData.map((contact) => ({
        projectId: projectIdentifier(contact.projectId),
        contactId: contactIdentifier(contact.contactId),
    }));

    return projectContactData;
};