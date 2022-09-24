const insertOrganization = require('../../services/organizations/insertOrganization');

module.exports = async (req, res) => {
    const returnData = await insertOrganization(req.body);
    res.send(201, returnData);
};