const Joi = require('joi');

module.exports = Joi.object({
    params: Joi.object({}),
    query: Joi.object({}),
    body: Joi.object({
        projectId: Joi.string().required(),
        groupId: Joi.string().required(),
        dueDate: Joi.date().required(),
        description: Joi.string().required(),
    }),
});