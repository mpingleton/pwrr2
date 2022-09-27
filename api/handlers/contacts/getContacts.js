const getContacts = require('../../services/contacts/getContacts');

module.exports = async (req, res) => {
    const returnData = await getContacts();
    res.send(200, {
        numberContacts: returnData.length,
        data: returnData,
    });
};