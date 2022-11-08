const getGroupAssignmentsByGroup = require('../../services/groups/getGroupAssignmentsByGroup');
const getSafeUserById = require('../../services/users/getSafeUserById');

module.exports = async (req, res) => {
    const assignments = await getGroupAssignmentsByGroup(req.params.groupId);

    let assignmentPromises = assignments.map((userId) => getSafeUserById(userId));
    let userData = await Promise.all(assignmentPromises);

    res.send(200, {
        numberUsers: userData.length,
        data: userData,
    });
};