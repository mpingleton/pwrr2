const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const parseIdentifier = require('../identifiers/parseIdentifier');
const projectIdentifier = require('../identifiers/projectIdentifier');

module.exports = async (projectId) => {
    const data = await prisma.projectContact.findMany({
        where: {
            projectId: parseIdentifier(projectId),
        },
    });

    const contactData = data.map((contact) => ({
        id: contact.id,
        projectId: projectIdentifier(contact.projectId),
        contactId: contact.contactId,
    }));

    return contactData;
};