const insertProject = require('../../services/projects/insertProject');

module.exports = async (req, res) => {
    console.log(req.user);
    await insertProject({
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
    res.send(201);
};