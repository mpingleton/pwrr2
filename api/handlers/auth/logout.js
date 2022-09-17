const invalidateSessionForUser = require('../../services/sessions/invalidateSessionForUser');

module.exports = async (req, res) => {
    await invalidateSessionForUser(req.user.userId);
    res.send(200);
};