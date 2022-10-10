import React, { useState, useEffect } from 'react';

import {
    Paper,
    Stack,
    Typography,
    Divider,
    Box,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import getTasksInProject from '../api/tasks/getTasksInProject';

function ProjectGroupTaskPanel(props) {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getTasksInProject(props.project.id).then((data) => setTasks(data.data))
    }, [props.project.id]);

    const columns = [
        { field: 'id', headerName: 'Task ID', width: 180 },
        { field: 'groupId', headerName: 'Assigned Group', width: 180 },
        { field: 'details', headerName: 'Details', width: 600 },
    ];

    return (
        <Paper
            sx={{ padding: 2 }}
        >
            <Stack
                direction="column"
                spacing={2}
            >
                <Typography variant="h5">Group Tasks</Typography>
                <Divider />
                <Box sx={{ height: '300px' }}>
                    <DataGrid
                        rows={tasks}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                    />
                </Box>
            </Stack>
        </Paper>
    );
}

export default ProjectGroupTaskPanel;