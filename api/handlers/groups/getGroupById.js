const getGroupById = require('../../services/groups/getGroupById');

module.exports = async (req, res) => {
    const groupData = await getGroupById(req.params.groupId);
    res.send(200, groupData);
};