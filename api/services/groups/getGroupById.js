const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const parseIdentifier = require('../identifiers/parseIdentifier');
const groupIdentifier = require('../identifiers/groupIdentifier');
const organizationIdentifier = require('../identifiers/organizationIdentifier');

module.exports = async (groupId) => {
    const data = await prisma.group.findUnique({
        where: {
            id: parseIdentifier(groupId),
        },
    });

    const groupData = {
        id: groupIdentifier(data.id),
        name: data.name,
        organizationId: organizationIdentifier(data.organizationId),
    };

    return groupData;
};