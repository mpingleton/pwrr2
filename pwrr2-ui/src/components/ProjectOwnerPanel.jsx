import React from 'react';

import {
    Paper,
    Stack,
    Typography,
    Divider,
    TextField,
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
                <TextField
                    InputProps={{ readOnly: true }}
                    label="Organization"
                    value={props.project.ownerData.organizationData.name}
                />
                <TextField
                    InputProps={{ readOnly: true }}
                    label="Group"
                    value={props.project.ownerData.name}
                />
            </Stack>
        </Paper>
    );
}

export default ProjectOwnerPanel;