import React, { useState } from 'react';

import {
    Paper,
    Stack,
    TextField,
    Typography,
    Divider,
    Box,
    Modal,
    Button,
    Select,
    MenuItem,
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

import createTask from '../api/tasks/createTask';
import getGroupsInOrganization from '../api/groups/getGroupsInOrganization';

function TaskInputDialog(props) {
    const [groupList, setGroupList] = useState([]);
    const [taskDescription, setTaskDescription] = useState('');
    const [taskGroupId, setTaskGroupId] = useState('');
    const [taskDue, setTaskDue] = useState(new Date());

    useState(() => {
        getGroupsInOrganization(props.project.ownerData.organizationId).then((data) => setGroupList(data.data));
    }, []);

    const handleSubmitTask = () => {
        createTask({
            projectId: props.project.id,
            groupId: taskGroupId,
            dueDate: taskDue,
            description: taskDescription,
        }).then(() => props.onClose());
    };

    return (
        <Modal
            open={props.open}
            onClose={props.onClose}
        >
            <Box
                sx={{
                    position: 'absolute',
                    width: '600px',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
            >
                <Paper
                    sx={{
                        padding: 2
                    }}
                >
                    <Stack
                        direction="column"
                        spacing={1}
                    >
                        <Typography variant="h5">New Task</Typography>
                        <Divider />
                        <TextField
                            value={taskDescription}
                            onChange={(event) => setTaskDescription(event.target.value)}
                            sx={{ width: '100%' }}
                            label="Description"
                            multiline
                            rows={4}
                        />
                        <Stack
                            direction="row"
                            spacing={1}
                        >
                            <Select
                                label="Assign Group"
                                value={taskGroupId}
                                onChange={(event) => setTaskGroupId(event.target.value)}
                                sx={{
                                    width: '100%',
                                }}
                            >
                                {groupList.map((group) => (
                                    <MenuItem value={group.id}>{group.name}</MenuItem>
                                ))}
                            </Select>
                            <LocalizationProvider dateAdapter={AdapterMoment}>
                                <DesktopDatePicker
                                    label='Due Date'
                                    value={taskDue}
                                    onChange={(date) => setTaskDue(date)}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                        </Stack>
                        <Divider />
                        <Stack
                            direction="row"
                            spacing={1}
                        >
                            <Button
                                variant="contained"
                                onClick={() => handleSubmitTask()}
                            >
                                Add
                            </Button>
                        </Stack>
                    </Stack>
                </Paper>
            </Box>
        </Modal>
    );
}

export default TaskInputDialog;