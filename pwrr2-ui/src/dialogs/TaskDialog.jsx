import React, { useState, useEffect } from 'react';

import {
    Modal,
    Box,
    Paper,
    Stack,
    TextField,
    Typography,
    Button,
    Divider
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
        { field: 'description', headerName: 'Details', width: 600 },
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
                            direction="row-reverse"
                            spacing={1}
                        >
                            <Button
                                variant="contained"
                                onClick={() => {}}
                            >
                                Complete
                            </Button>
                            <Button
                                variant="contained"
                                onClick={() => {}}
                            >
                                Cancel
                            </Button>
                            <Button
                                variant="contained"
                                onClick={() => {}}
                            >
                                Start
                            </Button>
                        </Stack>
                        <Divider />
                        <Stack
                            direction="row"
                            spacing={1}
                        >
                            <TextField
                                InputProps={{ readOnly: true }}
                                label="Task Description"
                                value={task.description}
                                multiline
                                rows={8}
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
                                    <TextField
                                        InputProps={{ readOnly: true }}
                                        label="Task ID"
                                        value={task.id}
                                        sx={{ width: '100%' }}
                                    />
                                    <TextField
                                        InputProps={{ readOnly: true }}
                                        label="Due Date"
                                        value={new Date(task.dueDate).toDateString()}
                                        sx={{ width: '100%' }}
                                    />
                                </Stack>
                                <Stack
                                    direction="row"
                                    spacing={1}
                                >
                                    <TextField
                                        InputProps={{ readOnly: true }}
                                        label="Status"
                                        value={'Not Started'}
                                        sx={{ width: '100%' }}
                                    />
                                    <TextField
                                        InputProps={{ readOnly: true }}
                                        label="Status Date"
                                        value={new Date().toDateString()}
                                        sx={{ width: '100%' }}
                                    />
                                </Stack>
                                <Stack
                                    direction="row"
                                    spacing={1}
                                >
                                    <TextField
                                        InputProps={{ readOnly: true }}
                                        label="Assigned Group"
                                        value={task.groupId}
                                        sx={{ width: '100%' }}
                                    />
                                    <TextField
                                        InputProps={{ readOnly: true }}
                                        label="Status By"
                                        value={'joe.snuffy'}
                                        sx={{ width: '100%' }}
                                    />
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