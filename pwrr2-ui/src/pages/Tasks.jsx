import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ListAndContentView from '../layouts/ListAndContentView';
import TaskListItem from '../components/TaskListItem';

import {
    Button,
    Stack,
    Select,
    MenuItem,
    Box,
    Paper,
    Typography,
} from '@mui/material';

import getGroupsInMe from '../api/groups/getGroupsInMe';
import getTasksInGroup from '../api/tasks/getTasksInGroup';
import getTaskById from '../api/tasks/getTaskById';

function Tasks() {
    const navigate = useNavigate();
    const [groupList, setGroupList] = useState([]);
    const [idSelectedGroup, setSelectedGroup] = useState(null);
    const [taskList, setTaskList] = useState([]);
    const [idSelectedTask, setSelectedTask] = useState(null);
    const [selectedTaskData, setSelectedTaskData] = useState(null);

    useEffect(() => {
        getGroupsInMe().then((data) => setGroupList(data.data));
    }, []);

    useEffect(() => {
        if (idSelectedGroup !== null) {
            getTasksInGroup(idSelectedGroup).then((data) => setTaskList(data.data));
        }
    }, [idSelectedGroup]);

    useEffect(() => {
        if (idSelectedTask !== null) {
            getTaskById(idSelectedTask).then((data) => setSelectedTaskData(data));
        }
        else {
            setSelectedTaskData(null);
        }
    }, [idSelectedTask]);

    const buttonBar = (
        <Stack
            direction="row"
            spacing={1}
            paddingTop={1}
            paddingBottom={1}
            sx={{
                width: '100%',
                height: 'fit-content',
                justifyContent: 'end',
            }}
        >
            <Select
                label="Group"
                value={idSelectedGroup}
                onChange={(event) => setSelectedGroup(event.target.value)}
                sx={{
                    width: '100%',
                }}
            >
                {groupList.map((group) => (
                    <MenuItem value={group.id}>{group.name}</MenuItem>
                ))}
            </Select>
        </Stack>
    );

    const taskListItems = taskList.map((task) => (
        <TaskListItem
            task={task}
            selected={task.id === idSelectedTask}
            onClick={() => setSelectedTask(task.id)}
        />
    ));

    return (
        <ListAndContentView
            list={taskListItems}
            buttonBar={buttonBar}
        />
    );
}

export default Tasks;