import React from 'react';

import {
    Paper,
    Stack,
    Typography,
    Divider,
} from '@mui/material';

function ProjectOwnerPanel(props) {

    return (
        <Paper
            sx={{ padding: 2 }}
        >
            <Stack
                direction="column"
                spacing={2}
            >
                <Typography variant="h5">Owner Information</Typography>
                <Divider />
                <Stack
                    direction="row"
                    justifyContent="space-between"
                >
                    <Typography>Organization:</Typography>
                    <Typography>{props.project.ownerData.organizationData.name}</Typography>
                </Stack>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                >
                    <Typography>Group:</Typography>
                    <Typography>{props.project.ownerData.name}</Typography>
                </Stack>
            </Stack>
        </Paper>
    );
}

export default ProjectOwnerPanel;