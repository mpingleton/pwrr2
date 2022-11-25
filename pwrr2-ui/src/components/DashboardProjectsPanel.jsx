import React from 'react';

import {
    Paper,
    Stack,
    Typography,
    Divider,
    Box,
} from '@mui/material';

function DashboardProjectsPanel(props) {

    var numberTotal = props.data.projectData.length;
    var numberIncomplete = 0;
    var numberCancelled = 0;

    for (let project of props.data.projectData) {
        
        if (project.completedDate === null) {
            numberIncomplete++;
        }

        if (project.cancelledDate !== null) {
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
                <Typography variant="h5">Projects</Typography>
                <Divider />
                <Typography variant="subtitle1">{`Total number of projects: ${numberTotal}.`}</Typography>
                <Typography variant="subtitle1">{`Incomplete: ${numberIncomplete}.`}</Typography>
                <Typography variant="subtitle1">{`Cancelled: ${numberCancelled}.`}</Typography>
            </Stack>
        </Paper>
    );
}

export default DashboardProjectsPanel;