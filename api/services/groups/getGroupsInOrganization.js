const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const parseIdentifier = require('../identifiers/parseIdentifier');
const groupIdentifier = require('../identifiers/groupIdentifier');
const organizationIdentifier = require('../identifiers/organizationIdentifier');

module.exports = async (organizationId) => {
    const data = await prisma.group.findMany({
        where: {
            organizationId: parseIdentifier(organizationId),
        },
    });

    const groupData = data.map((group) => ({
        id: groupIdentifier(group.id),
        name: group.name,
        organizationId: organizationIdentifier(group.organizationId)
    }));

    return groupData;
};