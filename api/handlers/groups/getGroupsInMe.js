const getGroupAssignmentsByUser = require('../../services/groups/getGroupAssignmentsByUser');
const getGroupById = require('../../services/groups/getGroupById');

module.exports = async (req, res) => {
    const groupIds = await getGroupAssignmentsByUser(req.user.id);
    const groupData = await Promise.all(groupIds.map((groupId) => getGroupById(groupId)));

    res.send(200, {
        numberGroups: groupData.length,
        data: groupData,
    });
};