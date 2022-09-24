const insertGroup = require('../../services/groups/insertGroup');

module.exports = async (req, res) => {
    const returnData = await insertGroup(req.body);
    res.send(201, returnData);
};