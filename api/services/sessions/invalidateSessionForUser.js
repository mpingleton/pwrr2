const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = async (userId) => {
    await prisma.session.updateMany({
        where: {
            userId: userId,
        },
        data: {
            invalidated: true,
        },
    });
};