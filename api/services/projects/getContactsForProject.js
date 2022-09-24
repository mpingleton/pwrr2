const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = async (projectId) => {
    const data = await prisma.projectContact.findMany({
        where: {
            projectId: projectId,
        },
    });

    const contactData = data.map((contact) => ({
        id: contact.id,
        projectId: contact.projectId,
        contactId: contact.contactId,
    }));

    return contactData;
};