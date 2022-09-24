const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = async (organizationId) => {
    const data = await prisma.group.findMany({
        where: {
            organizationId: organizationId,
        },
    });

    const groupData = data.map((group) => ({
        id: group.id,
        name: group.name,
        organizationId: group.organizationId
    }));

    return groupData;
};