const getSessionByToken = require('../services/sessions/getSessionByToken');
const getUserById = require('../services/users/getUserById');
const decodeToken = require('../services/sessions/decodeToken');

module.exports = () => async (req, res, nxt) => {
    // Get the token out of the header.
    const authorization = req.headers['authorization'];
    if (authorization == null) {
        res.send(401);
        return;
    }
    const authorizationSplit = authorization.split(' ');
    if (authorizationSplit[0] != 'Bearer') {
        res.send(400);
        return;
    }
    const accessToken = authorizationSplit[1];

    // Look up the session from the token.
    const session = await getSessionByToken(accessToken);

    // Look up the user from the session.
    const user = await getUserById(session.userId);
    if (user === null) {
        res.send(500);
        return;
    }

    // Decode the token and verify the decoded username matches the username listed on the session.
    const decodedObject = await decodeToken(accessToken);
    if (decodedObject.username != user.username) {
        res.send(401);
        return;
    }

    // Make sure the session has not been invalidated.
    if (session.invalidated === true) {
        res.send(401);
        return;
    }

    // Attach the user object to the request and move it on.
    req.user = user;
    nxt();
};