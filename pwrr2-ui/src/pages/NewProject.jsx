import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectInformationInputPanel from '../components/ProjectInformationInputPanel';
import ProjectStageInputPanel from '../components/ProjectStageInputPanel';
import ProjectContactsInputPanel from '../components/ProjectContactsInputPanel';

import {
    Stack,
    Box,
    Paper,
    Button,
} from '@mui/material';

import createProject from '../api/projects/createProject';

function NewProject(props) {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [supports, setSupports] = useState('');
    const [requirement, setRequirement] = useState('');
    const [justification, setJustification] = useState('');
    const [solution, setSolution] = useState('');
    const [stages, setStages] = useState([]);
    const [contacts, setContacts] = useState([]);

    const newProject = () => {
        setTitle('');
        setSupports('');
        setRequirement('');
        setJustification('');
        setSolution('');
        setStages([]);
    };

    const submitProject = () => {
        for (let i = 0; i < stages.length; i++) {
            stages[i].sequence = i + 1;
        }

        const contactIds = contacts.map((contact) => contact.id);

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
            contacts: contactIds,
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
                        onClick={() => navigate('/projects', { replace: true })}
                    >
                        Back to Projects
                    </Button>
                    <Button
                        variant="contained"
                        onClick={newProject}
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
                    <Stack
                        direction="column"
                        spacing={1}
                    >
                        <ProjectStageInputPanel
                            stages={stages}
                            setStages={setStages}
                        />
                        <ProjectContactsInputPanel
                            contacts={contacts}
                            setContacts={setContacts}
                        />
                    </Stack>
                </Box>
            </Stack>
        </Stack>
    );
}

export default NewProject;