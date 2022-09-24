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
                
            </Stack>
        </Paper>
    );
}

export default ProjectOwnerPanel;