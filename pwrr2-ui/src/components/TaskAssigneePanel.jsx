import React, { useState, useEffect } from 'react';

import {
    Paper,
    Stack,
    Typography,
    Divider,
    TextField,
    Select,
    MenuItem,
} from '@mui/material';

import getUsersInGroup from '../api/users/getUsersInGroup';

function TaskAssigneePanel(props) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsersInGroup(props.task.groupId)
            .then((data) => setUsers(data.data));
    }, []);

    const handleAssignToUser = (event) => {
        props.reassignTask(event.target.value);
    };

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
                <Select
                    label="User"
                    value={props.task.userId}
                    onChange={handleAssignToUser}
                    sx={{
                        width: '100%',
                    }}
                >
                    {users.map((user) => (<MenuItem value={user.id}>{user.username}</MenuItem>))}
                </Select>
            </Stack>
        </Paper>
    );
}

export default TaskAssigneePanel;