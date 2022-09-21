const insertProject = require('../../services/projects/insertProject');

module.exports = async (req, res) => {
    await insertProject({
        ownerId: req.body.ownerId,
        title: req.body.title,
        supportsMissionSystem: req.body.supportsMissionSystem,
        requirement: req.body.requirement,
        justification: req.body.justification,
        proposedTechnicalSolution: req.body.proposedTechnicalSolution,
        taskless: req.body.taskless,
        submittedDate: new Date(),
        validationDueDate: new Date(req.body.validationDueDate),
        planningDueDate: new Date(req.body.planningDueDate),
        implementationDueDate: new Date(req.body.implementationDueDate),
    });
    res.send(201);
};