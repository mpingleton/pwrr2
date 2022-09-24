const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = async (data) => {
    const returnData = await prisma.organization.create({
        data: {
            name: data.name,
        },
    });

    const organizationData = {
        id: returnData.id,
        name: returnData.name,
    };

    return organizationData;
};