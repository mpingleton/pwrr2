const getCommentsForProject = require('../../services/projects/getCommentsForProject');
const getContactsForProject = require('../../services/projects/getContactsForProject');
const getProjectById = require('../../services/projects/getProjectById');
const getStagesForProject = require('../../services/projects/getStagesForProject');
const getContactById = require('../../services/contacts/getContactById');
const getGroupById = require('../../services/groups/getGroupById');
const getOrganizationById = require('../../services/organizations/getOrganizationById');

module.exports = async (req, res) => {
    const projectData = await getProjectById(req.params.projectId);

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

    projectData.comments = await getCommentsForProject(projectData.id);
    
    projectData.ownerData = await getGroupById(projectData.ownerId);
    projectData.ownerData.organizationData = await getOrganizationById(projectData.ownerData.organizationId);

    res.send(200, projectData);
};