import React from 'react';

import {
    Paper,
    Stack,
    Typography,
    Divider,
    TextField,
} from '@mui/material';

function TaskProjectPanel(props) {
    return (
        <Paper
            sx={{ padding: 2 }}
        >
            <Stack
                direction="column"
                spacing={2}
            >
                <Typography variant="h5">Project</Typography>
                <Divider />
                <TextField
                    InputProps={{ readOnly: true }}
                    label="Id"
                    value={props.task.projectId}
                />
                <TextField
                    InputProps={{ readOnly: true }}
                    label="Title"
                    value={props.task.projectData.title}
                />
            </Stack>
        </Paper>
    );
}

export default TaskProjectPanel;