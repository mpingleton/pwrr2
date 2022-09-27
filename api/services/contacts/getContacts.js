const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const contactIdentifier = require('../identifiers/contactIdentifier');
const parseIdentifier = require('../identifiers/parseIdentifier');

module.exports = async () => {
    const data = await prisma.contact.findMany();

    const contactData = data.map((contact) => ({
        id: contactIdentifier(contact.id),
        firstName: contact.firstName,
        lastName: contact.lastName,
        rank: contact.rank,
        phone: contact.phone,
        email: contact.email
    }));

    return contactData;
};