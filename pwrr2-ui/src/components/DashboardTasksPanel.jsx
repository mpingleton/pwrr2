import React from 'react';

import {
    Paper,
    Stack,
    Typography,
    Divider,
    Box,
} from '@mui/material';

function DashboardTasksPanel(props) {

    return (
        <Paper
            sx={{ padding: 2 }}
        >
            <Stack
                direction="column"
                spacing={2}
            >
                <Typography variant="h5">Tasks</Typography>
                <Divider />
            </Stack>
        </Paper>
    );
}

export default DashboardTasksPanel;