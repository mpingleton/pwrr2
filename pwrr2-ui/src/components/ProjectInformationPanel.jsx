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
            sx={{ padding: 2 }}
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
                    <Typography variant='subtitle1'>{props.project.id}</Typography>
                </Stack>
                <Divider />
                <TextField
                    InputProps={{ readOnly: true }}
                    label="Mission/System Supported"
                    value={props.project.supportsMissionSystem}
                />
                <TextField
                    InputProps={{ readOnly: true }}
                    label="Requirement"
                    value={props.project.requirement}
                    multiline
                    rows={4}
                />
                <TextField
                    InputProps={{ readOnly: true }}
                    label="Justification"
                    value={props.project.justification}
                    multiline
                    rows={4}
                />
                <TextField
                    InputProps={{ readOnly: true }}
                    label="Proposed Technical Solution"
                    value={props.project.proposedTechnicalSolution}
                    multiline
                    rows={4}
                />
            </Stack>
        </Paper>
    );
}

export default ProjectInformationPanel;