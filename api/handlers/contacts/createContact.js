const insertContact = require('../../services/contacts/insertContact');

module.exports = async (req, res) => {
    const returnData = await insertContact(req.body);
    res.send(201, returnData);
};