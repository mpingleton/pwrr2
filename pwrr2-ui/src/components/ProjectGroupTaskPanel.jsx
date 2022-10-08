import React, { useState, useEffect } from 'react';

import {
    Paper,
    Stack,
    Typography,
    Divider,
} from '@mui/material';

import getTasksInProject from '../api/tasks/getTasksInProject';

function ProjectGroupTaskPanel(props) {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getTasksInProject(props.project.id).then((data) => setTasks(data.data))
    }, []);

    const taskComponents = tasks.map((task) => (
        <Stack
            direction="row"
            spacing={2}
            justifyContent="space-evenly"
        >
            <Typography>{task.id}</Typography>
            <Typography>{task.groupId}</Typography>
            <Typography>{task.details}</Typography>
        </Stack>
    ));

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
                {taskComponents}
            </Stack>
        </Paper>
    );
}

export default ProjectGroupTaskPanel;