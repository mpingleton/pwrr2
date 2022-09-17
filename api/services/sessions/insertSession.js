const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = async (data) => {
    await prisma.session.create({
        data: {
            userId: data.userId,
            token: data.token,
            timestamp: new Date(),
            expiration: new Date(),
        },
    });
};