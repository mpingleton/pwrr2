import React, { useState, useEffect } from 'react';
import ListAndContentView from '../layouts/ListAndContentView';
import ProjectListItem from '../components/ProjectListItem';
import ProjectInformationPanel from '../components/ProjectInformationPanel';
import ProjectStagePanel from '../components/ProjectStagePanel';

import {
    Button,
    Stack,
} from '@mui/material';

import getProjectsInGroup from '../api/projects/getProjectsInGroup';
import getProjectById from '../api/projects/getProjectById';

function Projects() {
    const [projectList, setProjectList] = useState(null);
    const [idSelectedProject, setSelectedProject] = useState(3);
    const [selectedProjectData, setSelectedProjectData] = useState(null);

    useEffect(() => {
        getProjectsInGroup(1).then((data) => setProjectList(data.data));
    }, []);

    useEffect(() => {
        if (idSelectedProject !== null) {
            getProjectById(idSelectedProject).then((data) => setSelectedProjectData(data));
        }
        else {
            setSelectedProjectData(null);
        }
    }, [idSelectedProject]);

    if (projectList === null) {
        return (<h1>Loading...</h1>);
    }

    const buttonBar = (
        <Button
            variant="contained"
        >
            New
        </Button>
    );

    const projectListItems = projectList.map((project) => (
        <ProjectListItem
            title={project.title}
            controlNumber={project.id}
            status="Submitted"
            selected={project.id === idSelectedProject}
            onClick={() => setSelectedProject(project.id)}
        />
    ));

    const projectContentView = selectedProjectData === null ? <h1>Please wait...</h1> : (
        <Stack
            direction="column"
            padding={1}
            spacing={1}
        >
            <Stack
                direction="row"
                padding={1}
                spacing={1}
            >
                <ProjectInformationPanel project={selectedProjectData} />
                <ProjectStagePanel project={selectedProjectData} />
            </Stack>
        </Stack>
    );

    return (
        <ListAndContentView
            list={projectListItems}
            buttonBar={buttonBar}
            content={projectContentView}
        />
    );
}

export default Projects;