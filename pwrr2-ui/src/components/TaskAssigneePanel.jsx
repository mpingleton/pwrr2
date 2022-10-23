import React from 'react';

import {
    Paper,
    Stack,
    Typography,
    Divider,
    TextField,
} from '@mui/material';

function TaskAssigneePanel(props) {
    return (
        <Paper
            sx={{ padding: 2 }}
        >
            <Stack
                direction="column"
                spacing={2}
            >
                <Typography variant="h5">Assignee</Typography>
                <Divider />
                <TextField
                    InputProps={{ readOnly: true }}
                    label="Id"
                    value={props.task.groupId}
                />
                <TextField
                    InputProps={{ readOnly: true }}
                    label="Name"
                    value={props.task.groupData.name}
                />
            </Stack>
        </Paper>
    );
}

export default TaskAssigneePanel;