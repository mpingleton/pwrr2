if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const jwt = require('jsonwebtoken');
const getUserByUsername = require('../../services/users/getUserByUsername');
const insertSession = require('../../services/sessions/insertSession');

module.exports = async (req, res) => {
    const userData = await getUserByUsername(req.body.username);

    if (userData.passphrase !== req.body.passphrase) {
        res.send(403);
        return;
    }
    
    const token = jwt.sign({ username: userData.username }, process.env.JWT_SESSION_SECRET_KEY);

    await insertSession({
        userId: userData.id,
        token: token,
    });

    res.send(200, {
        accessToken: token,
    });
};