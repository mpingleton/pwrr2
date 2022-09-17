const Joi = require('joi');

const validate = (schema) => async (req, res, nxt) => {
    const result = schema.validate({
        params: req.params,
        body: req.body,
        query: req.query,
    });

    if (result.error) {
        res.send(400);
    } else {
        nxt();
    }
};

module.exports = validate;