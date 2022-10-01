const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const groupIdentifier = require('../identifiers/groupIdentifier');

module.exports = async (userId) => {
    const data = await prisma.userGroupAssignment.findMany({
        where: {
            userId: userId,
        },
    });

    const groupData = data.map((group) => groupIdentifier(group.groupId));

    return groupData;
};