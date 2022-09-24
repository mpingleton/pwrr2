const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = async () => {
    const data = await prisma.organization.findMany();

    const organizationData = data.map((organization) => ({
        id: organization.id,
        name: organization.name,
    }));

    return organizationData;
};