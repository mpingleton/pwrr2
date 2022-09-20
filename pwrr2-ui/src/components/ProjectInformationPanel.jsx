import React from 'react';

import {
    Paper,
    Stack,
    Typography,
    Divider,
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
                spacing={1}
            >
                <Stack
                    direction="row"
                    justifyContent='space-between'
                    alignItems="center"
                >
                    <Typography variant='h5'>Project Title</Typography>
                    <Typography variant='subtitle1'>PWRR000000123</Typography>
                </Stack>
                <Divider />
                <Stack
                    direction="row"
                    justifyContent='space-between'
                >
                    <Typography variant='subtitle1'>Requirement: </Typography>
                    <Typography variant='subtitle1'>This is the requirement text!</Typography>
                </Stack>
                <Stack
                    direction="row"
                    justifyContent='space-between'
                >
                    <Typography variant='subtitle1'>Mission/System Supported: </Typography>
                    <Typography variant='subtitle1'>This is the mission!</Typography>
                </Stack>
                <Stack
                    direction="row"
                    justifyContent='space-between'
                >
                    <Typography variant='subtitle1'>Justification: </Typography>
                    <Typography variant='subtitle1'>This is the justification text!</Typography>
                </Stack>
                <Stack
                    direction="row"
                    justifyContent='space-between'
                >
                    <Typography variant='subtitle1'>Proposed Technical Solution: </Typography>
                    <Typography variant='subtitle1'>This is the solution text!</Typography>
                </Stack>
            </Stack>
        </Paper>
    );
}

export default ProjectInformationPanel;