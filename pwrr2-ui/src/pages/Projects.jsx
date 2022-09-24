import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ListAndContentView from '../layouts/ListAndContentView';
import ProjectListItem from '../components/ProjectListItem';
import ProjectInformationPanel from '../components/ProjectInformationPanel';
import ProjectOwnerPanel from '../components/ProjectOwnerPanel';
import ProjectStagePanel from '../components/ProjectStagePanel';
import ProjectContactsPanel from '../components/ProjectContactsPanel';

import {
    Button,
    Stack,
    Box,
} from '@mui/material';

import getProjectsInGroup from '../api/projects/getProjectsInGroup';
import getProjectById from '../api/projects/getProjectById';

function Projects() {
    const navigate = useNavigate();
    const [projectList, setProjectList] = useState(null);
    const [idSelectedProject, setSelectedProject] = useState(3);
    const [selectedProjectData, setSelectedProjectData] = useState(null);

    useEffect(() => {
        getProjectsInGroup(2).then((data) => setProjectList(data.data));
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
            onClick={() => navigate('/projects/new', { replace: true })}
        >
            New
        </Button>
    );

    const projectListItems = projectList.map((project) => (
        <ProjectListItem
            project={project}
            selected={project.id === idSelectedProject}
            onClick={() => setSelectedProject(project.id)}
        />
    ));

    const projectContentView = selectedProjectData === null ? <h1>Please wait...</h1> : (
        <Stack
            direction="column"
            padding={1}
        >
            <Stack
                direction="row"
                padding={1}
                spacing={1}
            >
                <Box sx={{ width: '60%' }}><ProjectInformationPanel project={selectedProjectData} /></Box>
                <Box sx={{ width: '40%' }}><ProjectStagePanel project={selectedProjectData} /></Box>
            </Stack>
            <Stack
                direction="row"
                padding={1}
                spacing={1}
            >
                <Box sx={{ width: '60%' }}><ProjectContactsPanel project={selectedProjectData} /></Box>
                <Box sx={{ width: '40%' }}><ProjectOwnerPanel project={selectedProjectData} /></Box>
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