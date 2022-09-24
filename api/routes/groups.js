const express = require('express');

const session = require('../middleware/session');
const groupsHandlers = require('../handlers/groups');

const validator = require('../middleware/validator');
const groupsValidators = require('../validators/groups');

const router = express.Router();

router.get('/id/:groupId', session(), validator(groupsValidators.getGroupById), groupsHandlers.getGroupById);
router.get('/in/organization/:organizationId', session(), validator(groupsValidators.getGroupsInOrganization), groupsHandlers.getGroupsInOrganization);
router.put('/', session(), validator(groupsValidators.createGroup), groupsHandlers.createGroup);

module.exports = router;