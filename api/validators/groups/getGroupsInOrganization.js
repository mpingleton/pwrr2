const Joi = require('joi');

module.exports = Joi.object({
    params: Joi.object({
        organizationId: Joi.number().integer().required(),
    }),
    query: Joi.object({}),
    body: Joi.object({}),
});