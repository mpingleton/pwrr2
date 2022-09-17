const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = async (username) => {
    const data = await prisma.user.findUnique({
        where: {
            username: username,
        },
    });

    const userData = {
        id: data.id,
        username: data.username,
        passphrase: data.passphrase,
        disabled: data.disabled,
        admin: data.admin,
        rank: data.rank,
        firstName: data.firstName,
        lastName: data.lastName,
    };

    return userData;
};