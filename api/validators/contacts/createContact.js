const Joi = require('joi');

module.exports = Joi.object({
    params: Joi.object({}),
    query: Joi.object({}),
    body: Joi.object({
        firstName: Joi.string().max(255).required(),
        lastName: Joi.string().max(255).required(),
        rank: Joi.string().max(10).required(),
        phone: Joi.string().max(20).required(),
        email: Joi.string().max(255).required(),
    }),
});