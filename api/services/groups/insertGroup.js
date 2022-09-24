const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = async (data) => {
    const returnData = await prisma.group.create({
        data: {
            name: data.name,
            organizationId: data.organizationId,
        },
    });

    const groupData = {
        id: returnData.id,
        name: returnData.name,
        organizationId: returnData.organizationId,
    };

    return groupData;
};