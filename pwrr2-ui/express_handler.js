const fs = require('fs');
const path = require('path');

module.exports = async (req, res) => {
    const options = {
        root: path.join(__dirname),
    };

    if (!fs.existsSync(__dirname + '/build')) {
        res.send(500);
    }
    else if (req.url === '') {
        // Send the index file.
        res.sendFile('/build/index.html', options);
    }
    else if (!fs.existsSync(__dirname + '/build' + req.url)) {
        // Send the index file.
        res.sendFile('/build/index.html', options);
    }
    else {
        // Send the requested file.
        res.sendFile('/build' + req.url, options);
    }
};