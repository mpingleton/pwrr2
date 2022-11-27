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
import completeTaskById from '../api/tasks/completeTaskById';
import cancelTaskById from '../api/tasks/cancelTaskById';
import pauseTaskById from '../api/tasks/pauseTaskById';
import startTaskById from '../api/tasks/startTaskById';
import resumeTaskById from '../api/tasks/resumeTaskById';

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

    const handleStartComplete = () => {
        if (task.startedBy === null) {
            startTaskById(task.id)
                .then(() => getTaskById(props.taskId))
                .then((data) => setTask(data));
        }
        else {
            completeTaskById(task.id)
                .then(() => getTaskById(props.taskId))
                .then((data) => setTask(data));
        }
    };

    const handlePauseResume = () => {
        if (task.pausedBy === null) {
            pauseTaskById(task.id)
                .then(() => getTaskById(props.taskId))
                .then((data) => setTask(data));
        }
        else {
            resumeTaskById(task.id)
                .then(() => getTaskById(props.taskId))
                .then((data) => setTask(data));
        }
    };

    const handleCancel = () => {
        cancelTaskById(task.id)
            .then(() => getTaskById(props.taskId))
            .then((data) => setTask(data));
    };

    const status = () => {
        if (task.completedBy !== null) {
            return {
                str: "Completed",
                user: `${task.completedByData.rank} ${task.completedByData.firstName} ${task.completedByData.lastName}`,
                timestamp: task.completedDate,
            };
        }
        else if (task.cancelledBy !== null) {
            return {
                str: "Cancelled",
                user: `${task.cancelledByData.rank} ${task.cancelledByData.firstName} ${task.cancelledByData.lastName}`,
                timestamp: task.cancelledDate,
            };
        }
        else if (task.pausedBy !== null) {
            return {
                str: "Paused",
                user: `${task.pausedByData.rank} ${task.pausedByData.firstName} ${task.pausedByData.lastName}`,
                timestamp: task.pausedDate,
            };
        }
        else if (task.startedBy !== null) {
            return {
                str: "In Progress",
                user: `${task.startedByData.rank} ${task.startedByData.firstName} ${task.startedByData.lastName}`,
                timestamp: task.startedDate,
            };
        }

        return { str: "Not Started" };
    };

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
                            justifyContent="end"
                        >
                            <Button
                                variant="contained"
                                onClick={handleCancel}
                                disabled={task.cancelledBy !== null || task.completedBy !== null}
                            >
                                Cancel
                            </Button>
                            <Button
                                variant="contained"
                                onClick={handlePauseResume}
                                disabled={task.startedBy === null || task.cancelledBy !== null || task.completedBy !== null}
                            >
                                {task.pausedBy === null ? "Pause" : "Resume"}
                            </Button>
                            <Button
                                variant="contained"
                                onClick={handleStartComplete}
                                disabled={task.cancelledBy !== null || task.completedBy !== null}
                            >
                                {task.startedBy === null ? "Start" : "Complete"}
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
                                        value={status().str}
                                        sx={{ width: '100%' }}
                                    />
                                    <TextField
                                        InputProps={{ readOnly: true }}
                                        label="Status Date"
                                        value={new Date(status().timestamp).toDateString()}
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
                                        value={task.groupData.name}
                                        sx={{ width: '100%' }}
                                    />
                                    <TextField
                                        InputProps={{ readOnly: true }}
                                        label="Status By"
                                        value={status().user}
                                        sx={{ width: '100%' }}
                                    />
                                </Stack>
                            </Stack>
                        </Stack>
                        <Divider />
                        <Stack
                            direction="row"
                            spacing={1}
                            justifyContent="space-evenly"
                        >
                            <Stack
                                direction="column"
                                spacing={1}
                                sx={{
                                    width: '100%',
                                }}
                            >
                                <Typography variant="h5">Required Tasks</Typography>
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
                            <Divider
                                flexItem
                                orientation='vertical'
                            />
                            <Stack
                                direction="column"
                                spacing={1}
                                sx={{
                                    width: '100%',
                                }}
                            >
                                <Typography variant="h5">Dependent Tasks</Typography>
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
                            </Stack>
                        </Stack>
                    </Stack>
                </Paper>
            </Box>
        </Modal>
    );
}

export default TaskDialog;