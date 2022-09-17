if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const init = async () => {
    // Validate environment variables.

    // Connect to the database.

    // Start the express server.
    app.use(bodyParser.json());
    app.use(cors());
    app.listen(3001, () => console.log('Server is running on port 3001.'));

    return 0;
};

init()
    .then((res) => {
        console.log('Initialization complete.');
    })
    .catch((err) => {
        console.log('Fatal error: ' + err);
        process.exit(err);
    });