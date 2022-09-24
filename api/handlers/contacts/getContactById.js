const getContactById = require('../../services/contacts/getContactById');

module.exports = async (req, res) => {
    const contactData = await getContactById(Number.parseInt(req.params.contactId));
    res.send(200, contactData);
};