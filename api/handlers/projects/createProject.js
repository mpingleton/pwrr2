const insertProject = require('../../services/projects/insertProject');
const insertStages = require('../../services/projects/insertStages');
const insertProjectContacts = require('../../services/projects/insertProjectContacts');

module.exports = async (req, res) => {
    const returnData = await insertProject({
        ownerId: req.body.ownerId,
        title: req.body.title,
        supportsMissionSystem: req.body.supportsMissionSystem,
        requirement: req.body.requirement,
        justification: req.body.justification,
        proposedTechnicalSolution: req.body.proposedTechnicalSolution,
        taskless: req.body.taskless,
        dueDate: new Date(req.body.dueDate),
        submittedDate: new Date(),
        submittedBy: req.user.id
    });

    await insertStages(returnData.id, req.body.stages);
    await insertProjectContacts(returnData.id, req.body.contacts);

    res.send(201, returnData);
};