import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ListAndContentView from '../layouts/ListAndContentView';
import ProjectListItem from '../components/ProjectListItem';
import ProjectInformationPanel from '../components/ProjectInformationPanel';
import ProjectOwnerPanel from '../components/ProjectOwnerPanel';
import ProjectStagePanel from '../components/ProjectStagePanel';
import ProjectContactsPanel from '../components/ProjectContactsPanel';
import ProjectCommentPanel from '../components/ProjectCommentPanel';
import ProjectAttachmentPanel from '../components/ProjectAttachmentPanel';
import ProjectGroupTaskPanel from '../components/ProjectGroupTaskPanel';

import {
    Button,
    Stack,
    Select,
    MenuItem,
    Box,
    Paper,
    Typography
} from '@mui/material';

import getGroupsInMe from '../api/groups/getGroupsInMe';
import getProjectsInGroup from '../api/projects/getProjectsInGroup';
import getActiveProjectsInGroup from '../api/projects/getActiveProjectsInGroup';
import getProjectById from '../api/projects/getProjectById';
import advanceProjectStage from '../api/projects/advanceProjectStage';
import cancelProject from '../api/projects/cancelProject';
import completeProject from '../api/projects/completeProject';

function Projects() {
    const navigate = useNavigate();
    const [groupList, setGroupList] = useState([]);
    const [idSelectedGroup, setSelectedGroup] = useState(null);
    const [projectFilterSelector, setProjectFilterSelector] = useState("active");
    const [projectList, setProjectList] = useState([]);
    const [idSelectedProject, setSelectedProject] = useState(null);
    const [selectedProjectData, setSelectedProjectData] = useState(null);

    useEffect(() => {
        getGroupsInMe().then((data) => setGroupList(data.data));
    }, []);

    useEffect(() => {
        if (groupList.length === 0) {
            setSelectedGroup(null);
        }
        else {
            setSelectedGroup(groupList[0].id);
        }
    }, [groupList]);

    useEffect(() => {
        if (idSelectedGroup !== null) {
            if (projectFilterSelector === "all") {
                getProjectsInGroup(idSelectedGroup).then((data) => setProjectList(data.data));
            }
            else if (projectFilterSelector === "active") {
                getActiveProjectsInGroup(idSelectedGroup).then((data) => setProjectList(data.data));
            }
        }
    }, [idSelectedGroup, projectFilterSelector]);

    useEffect(() => {
        if (idSelectedProject !== null) {
            getProjectById(idSelectedProject).then((data) => setSelectedProjectData(data));
        }
        else {
            setSelectedProjectData(null);
        }
    }, [idSelectedProject]);

    const handleAdvanceProjectStage = () => {
        advanceProjectStage(idSelectedProject)
            .then(() => getProjectById(idSelectedProject))
            .then((data) => setSelectedProjectData(data));
    };

    const handleCancelProject = () => {
        cancelProject(idSelectedProject)
            .then(() => getProjectById(idSelectedProject))
            .then((data) => setSelectedProjectData(data));
    };

    const handleCompleteProject = () => {
        completeProject(idSelectedProject)
            .then(() => getProjectById(idSelectedProject))
            .then((data) => setSelectedProjectData(data));
    };

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
            <Select
                value={projectFilterSelector}
                onChange={(event) => setProjectFilterSelector(event.target.value)}
                sx={{
                    width: '100%',
                }}
            >
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="all">All</MenuItem>
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

    const projectContentView = selectedProjectData === null ? (
        <Paper
            sx={{
                position: 'relative',
                width: 'fit-content',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                padding: 2,
            }}
        >
            <Typography>
                No project selected.
            </Typography>
        </Paper>
    ) : (
        <Stack
            direction="column"
            padding={1}
            spacing={1}
        >
            <Stack
                direction="row"
                spacing={1}
            >
                <Box sx={{ width: '60%' }}><ProjectInformationPanel project={selectedProjectData} /></Box>
                <Box sx={{ width: '40%' }}>
                    <ProjectStagePanel
                        project={selectedProjectData}
                        advanceStage={handleAdvanceProjectStage}
                        cancelProject={handleCancelProject}
                        completeProject={handleCompleteProject}
                    />
                </Box>
            </Stack>
            <Stack
                direction="row"
                spacing={1}
            >
                <Box sx={{ width: '60%' }}><ProjectContactsPanel project={selectedProjectData} /></Box>
                <Box sx={{ width: '40%' }}><ProjectOwnerPanel project={selectedProjectData} /></Box>
            </Stack>
            <Stack
                direction="row"
                spacing={1}
            >
                <Box sx={{ width: '60%' }}><ProjectCommentPanel project={selectedProjectData} /></Box>
                <Box sx={{ width: '40%' }}><ProjectAttachmentPanel project={selectedProjectData} /></Box>
            </Stack>
            <ProjectGroupTaskPanel project={selectedProjectData} />
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