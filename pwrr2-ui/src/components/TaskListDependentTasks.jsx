import React, { useState, useEffect } from 'react';

import {
    Paper,
    Stack,
    Typography,
    Divider,
    Box,
    Button,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';


function TaskListDependentTasks(props) {

    const columns = [
        { field: 'id', headerName: 'Task ID', width: 180 },
        { field: 'groupId', headerName: 'Assigned Group', width: 180 },
        { field: 'description', headerName: 'Description', width: 600 },
    ];

    return (
        <Paper
            sx={{ padding: 2 }}
        >
            <Stack
                direction="column"
                spacing={2}
            >
                <Typography variant="h5">Dependent Tasks</Typography>
                <Divider />
                <Box sx={{ height: '300px' }}>
                    <DataGrid
                        rows={props.task.dependentTasks}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                    />
                </Box>
            </Stack>
        </Paper>
    );
}

export default TaskListDependentTasks;