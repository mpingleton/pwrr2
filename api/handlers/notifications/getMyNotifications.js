const getGroupAssignmentsByUser = require('../../services/groups/getGroupAssignmentsByUser');
const getNotificationsInGroup = require('../../services/notifications/getNotificationsInGroup');

module.exports = async (req, res) => {
    const groupIds = await getGroupAssignmentsByUser(req.user.id);

    const promises = groupIds.map((groupId) => getNotificationsInGroup(groupId));
    const notificationData = await Promise.all(promises).then((result) => result.flat());

    res.send(200, {
        numberNotifications: notificationData.length,
        data: notificationData,
    });
};