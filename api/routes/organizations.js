const express = require('express');

const session = require('../middleware/session');
const organizationsHandlers = require('../handlers/organizations');

const validator = require('../middleware/validator');
const organizationsValidators = require('../validators/organizations');

const router = express.Router();

router.get('/', session(), organizationsHandlers.getOrganizations);
router.get('/id/:organizationId', session(), validator(organizationsValidators.getOrganizationById), organizationsHandlers.getOrganizationById);
router.put('/', session(), validator(organizationsValidators.createOrganization), organizationsHandlers.createOrganization);

module.exports = router;