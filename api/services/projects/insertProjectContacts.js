const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = async (projectId, data) => {
    const promises = data.map((contact) => prisma.projectContact.create({
        data: {
            projectId: projectId,
            contactId: contact
        },
    }));

    const returnData = await Promise.all(promises);

    const projectContactData = returnData.map((contact) => ({
        projectId: contact.projectId,
        contactId: contact.contactId,
    }));

    return projectContactData;
};