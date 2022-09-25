const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const organizationIdentifier = require('../identifiers/organizationIdentifier');

module.exports = async (data) => {
    const returnData = await prisma.organization.create({
        data: {
            name: data.name,
        },
    });

    const organizationData = {
        id: organizationIdentifier(returnData.id),
        name: returnData.name,
    };

    return organizationData;
};