const getStagesForProject = require('../../services/projects/getStagesForProject');
const completeProjectStage = require('../../services/projects/completeProjectStage');
const startProjectStage = require('../../services/projects/startProjectStage');

module.exports = async (req, res) => {
    const stagesData = await getStagesForProject(req.params.projectId);
    stagesData.sort((a, b) => {
        if (a.sequence < b.sequence) {
            return -1;
        }
        else if (a.sequence > b.sequence) {
            return 1;
        }

        return 0;
    });

    for (let i = 0; i < stagesData.length; i++) {
        if (stagesData[i].startedBy === null) {
            await startProjectStage(stagesData[i].id, req.user.id, new Date());
            break;
        }
        else if (stagesData[i].completedBy === null) {
            await completeProjectStage(stagesData[i].id, req.user.id, new Date());
        }
    }

    res.send(200, stagesData);
};

