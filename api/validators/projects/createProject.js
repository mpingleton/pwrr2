const Joi = require('joi');

module.exports = Joi.object({
    params: Joi.object({}),
    query: Joi.object({}),
    body: Joi.object({
        ownerId: Joi.number().integer().required(),
        title: Joi.string().max(255).required(),
        supportsMissionSystem: Joi.string().max(255).required(),
        requirement: Joi.string().max(1023).required(),
        justification: Joi.string().max(1023).required(),
        proposedTechnicalSolution: Joi.string().max(1023).required(),
        taskless: Joi.boolean(),
        validationDueDate: Joi.date(),
        planningDueDate: Joi.date(),
        implementationDueDate: Joi.date(),
    }),
});