const insertComment = require('../../services/projects/insertComment');

module.exports = async (req, res) => {
    const returnData = await insertComment(req.params.projectId, req.user.id, new Date(), req.body.comment);
    res.send(201, returnData);
};