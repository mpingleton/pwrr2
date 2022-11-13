const Joi = require('joi');

module.exports = Joi.object({
    params: Joi.object({
        notificationId: Joi.string().required(),
    }),
    query: Joi.object({}),
    body: Joi.object({}),
});