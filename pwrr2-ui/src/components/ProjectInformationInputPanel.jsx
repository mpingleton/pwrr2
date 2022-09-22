import React from 'react';

import {
    Paper,
    Stack,
    TextField,
} from '@mui/material';

function ProjectInformationInputPanel(props) {
    return (
        <Paper
            sx={{
                padding: 2,
            }}
        >
            <Stack
                direction="column"
                spacing={2}
            >
                <TextField
                    label="Title"
                    value={props.title}
                    onChange={(event) => props.setTitle(event.target.value)}
                />
                <TextField
                    label="Mission/System Supported"
                    value={props.supports}
                    onChange={(event) => props.setSupports(event.target.value)}
                />
                <TextField
                    label="Requirement"
                    value={props.requirement}
                    onChange={(event) => props.setRequirement(event.target.value)}
                    multiline
                    rows={4}
                />
                <TextField
                    label="Justification"
                    value={props.justification}
                    onChange={(event) => props.setJustification(event.target.value)}
                    multiline
                    rows={4}
                />
                <TextField
                    label="Proposed Technical Solution"
                    value={props.solution}
                    onChange={(event) => props.setSolution(event.target.value)}
                    multiline
                    rows={4}
                />
            </Stack>
        </Paper>
    );
}

export default ProjectInformationInputPanel;