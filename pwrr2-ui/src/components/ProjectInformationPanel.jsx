import React from 'react';

import {
    Paper,
    Stack,
    Typography,
    Divider,
    TextField,
} from '@mui/material';

function ProjectInformationPanel(props) {
    return (
        <Paper
            sx={{
                width: '100%',
                height: '100%',
                boxSizing: "border-box",
                padding: 2,
            }}
        >
            <Stack
                direction="column"
                spacing={2}
            >
                <Stack
                    direction="row"
                    justifyContent='space-between'
                    alignItems="center"
                >
                    <Typography variant='h5'>{props.project.title}</Typography>
                    <Typography variant='subtitle1'>PWRR000000123</Typography>
                </Stack>
                <Divider />
                <TextField
                    InputProps={{ readOnly: true }}
                    label="Requirement"
                    value={props.project.requirement}
                />
                <TextField
                    InputProps={{ readOnly: true }}
                    label="Mission/System Supported"
                    value={props.project.supportsMissionSystem}
                />
                <TextField
                    InputProps={{ readOnly: true }}
                    label="Justification"
                    value={props.project.justification}
                />
                <TextField
                    InputProps={{ readOnly: true }}
                    label="Proposed Technical Solution"
                    value={props.project.proposedTechnicalSolution}
                />
            </Stack>
        </Paper>
    );
}

export default ProjectInformationPanel;