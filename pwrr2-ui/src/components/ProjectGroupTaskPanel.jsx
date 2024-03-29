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
import TaskDialog from '../dialogs/TaskDialog';

import getTasksInProject from '../api/tasks/getTasksInProject';
import TaskInputDialog from '../dialogs/TaskInputDialog';

function ProjectGroupTaskPanel(props) {
    const [tasks, setTasks] = useState([]);
    const [selectedTaskId, setSelectedTaskId] = useState(null)
    const [isTaskDialogOpen, setTaskDialogOpen] = useState(false);
    const [isTaskInputDialogOpen, setTaskInputDialogOpen] = useState(false);

    useEffect(() => {
        getTasksInProject(props.project.id).then((data) => setTasks(data.data))
    }, [props.project.id]);

    const columns = [
        { field: 'id', headerName: 'Task ID', width: 180 },
        { field: 'groupId', headerName: 'Assigned Group', width: 180 },
        { field: 'description', headerName: 'Description', width: 600 },
    ];

    return (
        <Paper
            sx={{ padding: 2 }}
        >
            <TaskDialog
                open={isTaskDialogOpen}
                onClose={() => setTaskDialogOpen(false)}
                taskId={selectedTaskId}
            />
            <TaskInputDialog
                open={isTaskInputDialogOpen}
                onClose={() => setTaskInputDialogOpen(false)}
                project={props.project}
            />
            <Stack
                direction="column"
                spacing={2}
            >
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography variant="h5">Group Tasks</Typography>
                    <Stack
                        direction="row"
                        spacing={2}
                    >
                        <Button
                            variant='contained'
                            onClick={() => setTaskDialogOpen(true)}
                            disabled={selectedTaskId === null}
                        >
                            View
                        </Button>
                        <Button
                            variant='contained'
                            onClick={() => setTaskInputDialogOpen(true)}
                        >
                            New
                        </Button>
                    </Stack>
                </Stack>
                <Divider />
                <Box sx={{ height: '300px' }}>
                    <DataGrid
                        rows={tasks}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        onSelectionModelChange={(event) => {
                            if (event.length === 1) {
                                setSelectedTaskId(event[0]);
                            }
                        }}
                    />
                </Box>
            </Stack>
        </Paper>
    );
}

export default ProjectGroupTaskPanel;