const express = require('express');

const session = require('../middleware/session');
const authHandlers = require('../handlers/auth');

const validator = require('../middleware/validator');
const authValidators = require('../validators/auth');

const router = express.Router();

router.post('/login', validator(authValidators.login), authHandlers.login);
router.post('/logout', session(), authHandlers.logout);

module.exports = router;