const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const contactIdentifier = require('../identifiers/contactIdentifier');
const parseIdentifier = require('../identifiers/parseIdentifier');

module.exports = async (contactId) => {
    const data = await prisma.contact.findUnique({
        where: {
            id: parseIdentifier(contactId),
        },
    });

    const contactData = {
        id: contactIdentifier(data.id),
        firstName: data.firstName,
        lastName: data.lastName,
        rank: data.rank,
        phone: data.phone,
        email: data.email
    };

    return contactData;
};