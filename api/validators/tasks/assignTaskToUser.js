const Joi = require('joi');

module.exports = Joi.object({
    params: Joi.object({
        taskId: Joi.string().required(),
        userId: Joi.number().required(),
    }),
    query: Joi.object({}),
    body: Joi.object({}),
});