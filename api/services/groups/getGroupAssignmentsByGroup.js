const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const parseIdentifier = require('../identifiers/parseIdentifier');

module.exports = async (groupId) => {
    const data = await prisma.userGroupAssignment.findMany({
        where: {
            groupId: parseIdentifier(groupId),
        },
    });

    const userData = data.map((user) => user.userId);

    return userData;
};