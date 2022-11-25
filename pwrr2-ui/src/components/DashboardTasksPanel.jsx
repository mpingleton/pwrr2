import React from 'react';

import {
    Paper,
    Stack,
    Typography,
    Divider,
    Box,
} from '@mui/material';

function DashboardTasksPanel(props) {

    var numberTotal = props.data.taskData.length;
    var numberIncomplete = 0;
    var numberCancelled = 0;

    for (let task of props.data.taskData) {
        
        if (task.completedDate === null) {
            numberIncomplete++;
        }

        if (task.cancelledDate !== null) {
            numberCancelled++;
        }
    }

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
                <Typography variant="subtitle1">{`Total number of tasks: ${numberTotal}.`}</Typography>
                <Typography variant="subtitle1">{`Incomplete: ${numberIncomplete}.`}</Typography>
                <Typography variant="subtitle1">{`Cancelled: ${numberCancelled}.`}</Typography>
            </Stack>
        </Paper>
    );
}

export default DashboardTasksPanel;