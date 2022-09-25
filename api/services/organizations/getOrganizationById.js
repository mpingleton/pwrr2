const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const parseIdentifier = require('../identifiers/parseIdentifier');
const organizationIdentifier = require('../identifiers/organizationIdentifier');

module.exports = async (organizationId) => {
    const data = await prisma.organization.findUnique({
        where: {
            id: parseIdentifier(organizationId),
        },
    });

    const organizationData = {
        id: organizationIdentifier(data.id),
        name: data.name,
    };

    return organizationData;
};