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
    Select,
    MenuItem,
    Box,
} from '@mui/material';

import getGroupsInMe from '../api/groups/getGroupsInMe';
import getProjectsInGroup from '../api/projects/getProjectsInGroup';
import getProjectById from '../api/projects/getProjectById';

function Projects() {
    const navigate = useNavigate();
    const [groupList, setGroupList] = useState([]);
    const [idSelectedGroup, setSelectedGroup] = useState(null);
    const [projectList, setProjectList] = useState([]);
    const [idSelectedProject, setSelectedProject] = useState('PWRP000000000017');
    const [selectedProjectData, setSelectedProjectData] = useState(null);

    useEffect(() => {
        getGroupsInMe().then((data) => setGroupList(data.data));
    }, []);

    useEffect(() => {
        if (idSelectedGroup !== null) {
            getProjectsInGroup(idSelectedGroup).then((data) => setProjectList(data.data));
        }
    }, [idSelectedGroup]);

    useEffect(() => {
        if (idSelectedProject !== null) {
            getProjectById(idSelectedProject).then((data) => setSelectedProjectData(data));
        }
        else {
            setSelectedProjectData(null);
        }
    }, [idSelectedProject]);

    const buttonBar = (
        <Stack
            direction='row'
            spacing={1}
            paddingTop={1}
            paddingBottom={1}
            sx={{
                width: '100%',
                height: 'fit-content',
                justifyContent: 'end',
            }}
        >
            <Select
                label="Group"
                value={idSelectedGroup}
                onChange={(event) => setSelectedGroup(event.target.value)}
                sx={{
                    width: '100%',
                }}
            >
                {groupList.map((group) => (
                    <MenuItem value={group.id}>{group.name}</MenuItem>
                ))}
            </Select>
            <Button
                variant="contained"
                onClick={() => navigate('/projects/new', { replace: true })}
            >
                New
            </Button>
        </Stack>
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