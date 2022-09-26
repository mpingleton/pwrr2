const Joi = require('joi');

module.exports = Joi.object({
    params: Joi.object({}),
    query: Joi.object({}),
    body: Joi.object({
        ownerId: Joi.string().required(),
        title: Joi.string().max(255).required(),
        supportsMissionSystem: Joi.string().max(255).required(),
        requirement: Joi.string().max(1023).required(),
        justification: Joi.string().max(1023).required(),
        proposedTechnicalSolution: Joi.string().max(1023).required(),
        taskless: Joi.boolean(),
        dueDate: Joi.date(),
        stages: Joi.array().items(Joi.object({
            description: Joi.string().max(255).required(),
            dueDate: Joi.date(),
            sequence: Joi.number().integer().required(),
        })),
        contacts: Joi.array().items(Joi.string()),
    }),
});