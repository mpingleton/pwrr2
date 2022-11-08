const express = require('express');

const session = require('../middleware/session');
const usersHandlers = require('../handlers/users');

const validator = require('../middleware/validator');
const usersValidators = require('../validators/users');

const router = express.Router();

router.get('/in/group/:groupId', session(), validator(usersValidators.getUsersInGroup), usersHandlers.getUsersInGroup);

module.exports = router;