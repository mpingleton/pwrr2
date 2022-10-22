import React from 'react';

import {
    Paper,
    Stack,
    Typography,
    Divider,
    TextField,
} from '@mui/material';

function TaskInformationPanel(props) {
    return (
        <Paper
            sx={{ padding: 2 }}
        >
            <Stack
                direction="column"
                spacing={2}
            >
                <Typography variant="h5">Task Information</Typography>
                <Divider />
                <TextField
                    InputProps={{ readOnly: true }}
                    label="Task Id"
                    value={props.task.id}
                />
                <TextField
                    InputProps={{ readOnly: true }}
                    label="Details"
                    value={props.task.description}
                    multiline
                    rows={4}
                />
            </Stack>
        </Paper>
    );
}

export default TaskInformationPanel;