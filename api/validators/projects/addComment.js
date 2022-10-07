const Joi = require('joi');

module.exports = Joi.object({
    params: Joi.object({
        projectId: Joi.string().required(),
    }),
    query: Joi.object({}),
    body: Joi.object({
        comment: Joi.string().required(),
    }),
});