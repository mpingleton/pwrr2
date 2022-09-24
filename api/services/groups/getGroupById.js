const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = async (groupId) => {
    const data = await prisma.group.findUnique({
        where: {
            id: groupId,
        },
    });

    const groupData = {
        id: data.id,
        name: data.name,
        organizationId: data.organizationId,
    };

    return groupData;
};