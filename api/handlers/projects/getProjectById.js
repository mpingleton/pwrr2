const getContactsForProject = require('../../services/projects/getContactsForProject');
const getProjectById = require('../../services/projects/getProjectById');
const getStagesForProject = require('../../services/projects/getStagesForProject');
const getContactById = require('../../services/contacts/getContactById');

module.exports = async (req, res) => {
    const projectData = await getProjectById(Number.parseInt(req.params.projectId));

    projectData.stages = await getStagesForProject(projectData.id);
    projectData.stages.sort((a, b) => {
        if (a.sequence < b.sequence) {
            return -1;
        }
        else if (a.sequence > b.sequence) {
            return 1;
        }

        return 0;
    });

    const contactIds = await getContactsForProject(projectData.id);
    projectData.contacts = await Promise.all(contactIds.map((contact) => getContactById(contact.contactId)));

    res.send(200, projectData);
};