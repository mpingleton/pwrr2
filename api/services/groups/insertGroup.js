const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const parseIdentifier = require('../identifiers/parseIdentifier');
const groupIdentifier = require('../identifiers/groupIdentifier');
const organizationIdentifier = require('../identifiers/organizationIdentifier');

module.exports = async (data) => {
    const returnData = await prisma.group.create({
        data: {
            name: data.name,
            organizationId: parseIdentifier(data.organizationId),
        },
    });

    const groupData = {
        id: groupIdentifier(returnData.id),
        name: returnData.name,
        organizationId: organizationIdentifier(returnData.organizationId),
    };

    return groupData;
};