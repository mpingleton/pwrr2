const Joi = require('joi');

module.exports = Joi.object({
    params: Joi.object({
        projectId: Joi.number().integer().required(),
    }),
    query: Joi.object({}),
    body: Joi.object({}),
});