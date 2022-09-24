const Joi = require('joi');

module.exports = Joi.object({
    params: Joi.object({}),
    query: Joi.object({}),
    body: Joi.object({
        name: Joi.string().max(255).required(),
    }),
});