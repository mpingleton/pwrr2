const getOrganizations = require('../../services/organizations/getOrganizations');

module.exports = async (req, res) => {
    const organizationData = await getOrganizations();
    res.send(200, {
        numberOrganizations: organizationData.length,
        data: organizationData,
    });
};