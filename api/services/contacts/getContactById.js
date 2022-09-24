const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = async (contactId) => {
    const data = await prisma.contact.findUnique({
        where: {
            id: contactId,
        },
    });

    const contactData = {
        id: data.id,
        firstName: data.firstName,
        lastName: data.lastName,
        rank: data.rank,
        phone: data.phone,
        email: data.email
    };

    return contactData;
};