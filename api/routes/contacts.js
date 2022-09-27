const express = require('express');

const session = require('../middleware/session');
const contactsHandlers = require('../handlers/contacts');

const validator = require('../middleware/validator');
const contactsValidators = require('../validators/contacts');

const router = express.Router();

router.get('/', session(), contactsHandlers.getContacts);
router.get('/id/:contactId', session(), validator(contactsValidators.getContactById), contactsHandlers.getContactById);
router.put('/', session(), validator(contactsValidators.createContact), contactsHandlers.createContact);

module.exports = router;