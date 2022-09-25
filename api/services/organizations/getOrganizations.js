const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const organizationIdentifier = require('../identifiers/organizationIdentifier');

module.exports = async () => {
    const data = await prisma.organization.findMany();

    const organizationData = data.map((organization) => ({
        id: organizationIdentifier(organization.id),
        name: organization.name,
    }));

    return organizationData;
};