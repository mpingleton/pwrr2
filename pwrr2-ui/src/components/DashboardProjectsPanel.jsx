import React from 'react';

import {
    Paper,
    Stack,
    Typography,
    Divider,
    Box,
} from '@mui/material';

function DashboardProjectsPanel(props) {

    return (
        <Paper
            sx={{ padding: 2 }}
        >
            <Stack
                direction="column"
                spacing={2}
            >
                <Typography variant="h5">Projects</Typography>
                <Divider />
            </Stack>
        </Paper>
    );
}

export default DashboardProjectsPanel;