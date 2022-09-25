const getOrganizationById = require('../../services/organizations/getOrganizationById');

module.exports = async (req, res) => {
    const organizationData = await getOrganizationById(req.params.organizationId);
    res.send(200, organizationData);
};