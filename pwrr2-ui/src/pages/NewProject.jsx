import React, { useState } from 'react';
import ProjectInformationInputPanel from '../components/ProjectInformationInputPanel';
import ProjectStageInputPanel from '../components/ProjectStageInputPanel';

import {
    Stack,
    Box,
    Paper,
    Button,
} from '@mui/material';

import createProject from '../api/projects/createProject';

function NewProject(props) {
    const [title, setTitle] = useState('');
    const [supports, setSupports] = useState('');
    const [requirement, setRequirement] = useState('');
    const [justification, setJustification] = useState('');
    const [solution, setSolution] = useState('');
    const [stages, setStages] = useState([]);

    const submitProject = () => {
        for (let i = 0; i < stages.length; i++) {
            stages[i].sequence = i + 1;
        }

        createProject({
            ownerId: 2,
            title: title,
            supportsMissionSystem: supports,
            requirement: requirement,
            justification: justification,
            proposedTechnicalSolution: solution,
            taskless: false,
            dueDate: new Date(),
            stages: stages,
        }).then(() => {});
    };

    return (
        <Stack
            direction="column"
            padding={1}
            spacing={1}
        >
            <Paper
                sx={{
                    width: 'fit-content',
                    padding: 1,
                    alignSelf: 'center'
                }}
            >
                <Stack
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                >
                    <Button
                        variant="contained"
                    >
                        Back to Projects
                    </Button>
                    <Button
                        variant="contained"
                    >
                        New
                    </Button>
                    <Button
                        variant="contained"
                        onClick={submitProject}
                    >
                        Create
                    </Button>
                </Stack>
            </Paper>
            <Stack
                direction="row"
                spacing={1}
            >
                <Box sx={{ width: '65%' }}>
                    <ProjectInformationInputPanel
                        title={title}
                        supports={supports}
                        requirement={requirement}
                        justification={justification}
                        solution={solution}
                        setTitle={setTitle}
                        setSupports={setSupports}
                        setRequirement={setRequirement}
                        setJustification={setJustification}
                        setSolution={setSolution}
                    />
                </Box>
                <Box sx={{ width: '35%' }}>
                    <ProjectStageInputPanel
                        stages={stages}
                        setStages={setStages}
                    />
                </Box>
            </Stack>
        </Stack>
    );
}

export default NewProject;