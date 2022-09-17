const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = async (token) => {
    const data = await prisma.session.findUnique({
        where: {
            token: token,
        },
    });

    const sessionData = {
        id: data.id,
        userId: data.userId,
        token: data.token,
        timestamp: data.timestamp,
        expiration: data.expiration,
        invalidated: data.invalidated,
    };

    return sessionData;
};