const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = async (organizationId) => {
    const data = await prisma.organization.findUnique({
        where: {
            id: organizationId,
        },
    });

    const organizationData = {
        id: data.id,
        name: data.name,
    };

    return organizationData;
};