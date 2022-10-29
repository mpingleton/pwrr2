if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const { PrismaClient } = require('@prisma/client');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRoutes = require('./api/routes');
const uiRoutes = require('./pwrr2-ui/express_handler');

const prisma = new PrismaClient();

const app = express();

const init = async () => {
    // Validate environment variables.

    // Start the express server.
    app.use(bodyParser.json());
    app.use(cors());
    app.use('/api', apiRoutes);
    app.use('/', uiRoutes);
    app.listen(8080, () => console.log('Server is running on port 8080.'));

    return 0;
};

init()
    .then((res) => {
        console.log('Initialization complete.');
    })
    .catch(async (err) => {
        console.log('Fatal error: ' + err);
        await prisma.$disconnect();
        process.exit(err);
    });