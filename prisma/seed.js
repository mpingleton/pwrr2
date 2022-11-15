const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const users = [
    {
        username: "john.doe",
        passphrase: "123",
        disabled: false,
        admin: false,
        rank: "SrA",
        firstName: "John",
        lastName: "Doe"
    },
    {
        username: "jane.doe",
        passphrase: "123",
        disabled: false,
        admin: false,
        rank: "A1C",
        firstName: "Jane",
        lastName: "Doe"
    },
];

const organizations = [
    {
        name: "Mickey Mouse Clubhouse"
    },
];

const groups = [
    {
        name: "Plans and Programs",
        organizationId: 1,
    },
    {
        name: "CST",
        organizationId: 1,
    },
    {
        name: "Infrastructure",
        organizationId: 1,
    },
    {
        name: "ITAM",
        organizationId: 1,
    },
    {
        name: "NetAdmin",
        organizationId: 1,
    },
];

const userGroupAssignments = [
    {
        userId: 1,
        groupId: 1,
    },
    {
        userId: 1,
        groupId: 2,
    },
    {
        userId: 2,
        groupId: 3,
    },
];

async function main() {
    console.log("Start seeding...");

    for (const user of users) {
        const newUser = await prisma.user.create({ data: user });
        console.log(`New user: ${JSON.stringify(newUser)}.`)
    }

    for (const organization of organizations) {
        const newOrg = await prisma.organization.create({ data: organization });
        console.log(`New organization: ${JSON.stringify(newOrg)}.`);
    }

    for (const group of groups) {
        const newGroup = await prisma.group.create({ data: group });
        console.log(`New group: ${JSON.stringify(newGroup)}.`);
    }

    for (const assignment of userGroupAssignments) {
        const newAssignment = await prisma.userGroupAssignment.create({ data: assignment });
        console.log(`New user-to-group assignment: ${JSON.stringify(newAssignment)}.`);
    }

    console.log("Seeding finished.");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });