const Joi = require('joi');

module.exports = Joi.object({
    params: Joi.object({}),
    query: Joi.object({}),
    body: Joi.object({
        username: Joi.string().required(),
        passphrase: Joi.string().required(),
    }),
});