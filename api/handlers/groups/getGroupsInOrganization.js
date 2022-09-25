const getGroupsInOrganization = require('../../services/groups/getGroupsInOrganization');

module.exports = async (req, res) => {
    const groupData = await getGroupsInOrganization(req.params.organizationId);
    res.send(200, {
        numberGroups: groupData.length,
        data: groupData,
    });
};