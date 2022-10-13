import React, { useState, useEffect } from 'react';

import {
    Modal,
    Box,
    Paper,
    Stack,
    TextField,
    Typography,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import getTaskById from '../api/tasks/getTaskById';

function TaskDialog(props) {
    const [task, setTask] = useState(null);

    useEffect(() => {
        if (props.open === true) {
            getTaskById(props.taskId)
                .then((data) => setTask(data));
        }
    }, [props.taskId, props.open]);

    if (task === null) {
        return null;
    }
    
    const columns = [
        { field: 'id', headerName: 'Task ID', width: 180 },
        { field: 'groupId', headerName: 'Assigned Group', width: 180 },
        { field: 'details', headerName: 'Details', width: 600 },
    ];

    return (
        <Modal
            open={props.open}
            onClose={props.onClose}
        >
            <Box
                sx={{
                    position: 'absolute',
                    width: '80%',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
            >
                <Paper
                    sx={{
                        padding: 2,
                    }}
                >
                    <Stack
                        direction="column"
                        spacing={1}
                    >
                        <Stack
                            direction="row"
                            spacing={1}
                        >
                            <TextField
                                InputProps={{ readOnly: true }}
                                label="Task Details"
                                value={task.details}
                                multiline
                                rows={4}
                                sx={{ width: '100%' }}
                            />
                            <Stack
                                direction="column"
                                spacing={1}
                                sx={{ width: '100%' }}
                            >
                                <Stack
                                    direction="row"
                                    spacing={1}
                                >
                                    <Typography>Task Id: </Typography>
                                    <Typography>{task.id}</Typography>
                                </Stack>
                                <Stack
                                    direction="row"
                                    spacing={1}
                                >
                                    <Typography>Due Date: </Typography>
                                    <Typography>{task.dueDate}</Typography>
                                </Stack>
                                <Stack
                                    direction="row"
                                    spacing={1}
                                >
                                    <Typography>Completion Date: </Typography>
                                    <Typography>{task.completedDate}</Typography>
                                </Stack>
                                <Stack
                                    direction="row"
                                    spacing={1}
                                >
                                    <Typography>Assigned Group: </Typography>
                                    <Typography>{task.groupId}</Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                        <Stack
                            direction="row"
                            spacing={1}
                            justifyContent="space-evenly"
                        >
                            <Box 
                                sx={{
                                    width: '100%',
                                    height: '300px'
                                }}
                            >
                                <DataGrid
                                    rows={task.dependentTasks}
                                    columns={columns}
                                    pageSize={5}
                                    rowsPerPageOptions={[5]}
                                />
                            </Box>
                            <Box 
                                sx={{
                                    width: '100%',
                                    height: '300px'
                                }}
                            >
                                <DataGrid
                                    rows={task.independentTasks}
                                    columns={columns}
                                    pageSize={5}
                                    rowsPerPageOptions={[5]}
                                />
                            </Box>
                        </Stack>
                    </Stack>
                </Paper>
            </Box>
        </Modal>
    );
}

export default TaskDialog;