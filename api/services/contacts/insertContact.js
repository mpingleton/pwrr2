const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const contactIdentifier = require('../identifiers/contactIdentifier');

module.exports = async (data) => {
    const returnData = await prisma.contact.create({
        data: {
            firstName: data.firstName,
            lastName: data.lastName,
            rank: data.rank,
            phone: data.phone,
            email: data.email,
        },
    });

    const contactData = {
        id: contactIdentifier(returnData.id),
        firstName: returnData.firstName,
        lastName: returnData.lastName,
        rank: returnData.rank,
        phone: returnData.phone,
        email: returnData.email,
    };

    return contactData;
};