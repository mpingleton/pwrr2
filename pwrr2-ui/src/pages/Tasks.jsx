import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ListAndContentView from '../layouts/ListAndContentView';
import TaskListItem from '../components/TaskListItem';
import TaskInformationPanel from '../components/TaskInformationPanel';
import TaskStagePanel from '../components/TaskStagePanel';
import TaskAssigneePanel from '../components/TaskAssigneePanel';
import TaskProjectPanel from '../components/TaskProjectPanel';
import TaskListDependentTasks from '../components/TaskListDependentTasks';
import TaskListIndependentTasks from '../components/TaskListIndependentTasks';

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
import getActiveTasksInGroup from '../api/tasks/getActiveTasksInGroup';
import getTaskById from '../api/tasks/getTaskById';
import completeTaskById from '../api/tasks/completeTaskById';
import cancelTaskById from '../api/tasks/cancelTaskById';
import pauseTaskById from '../api/tasks/pauseTaskById';
import startTaskById from '../api/tasks/startTaskById';
import resumeTaskById from '../api/tasks/resumeTaskById';
import assignTaskToUser from '../api/tasks/assignTaskToUser';

function Tasks() {
    const navigate = useNavigate();
    const [groupList, setGroupList] = useState([]);
    const [idSelectedGroup, setSelectedGroup] = useState(null);
    const [taskFilterSelector, setTaskFilterSelector] = useState("active");
    const [taskList, setTaskList] = useState([]);
    const [idSelectedTask, setSelectedTask] = useState(null);
    const [selectedTaskData, setSelectedTaskData] = useState(null);

    useEffect(() => {
        getGroupsInMe().then((data) => setGroupList(data.data));
    }, []);

    useEffect(() => {
        if (idSelectedGroup !== null) {
            if (taskFilterSelector === "all") {
                getTasksInGroup(idSelectedGroup).then((data) => setTaskList(data.data));
            }
            else if (taskFilterSelector === "active") {
                getActiveTasksInGroup(idSelectedGroup).then((data) => setTaskList(data.data));
            }
        }
    }, [idSelectedGroup, taskFilterSelector]);

    useEffect(() => {
        if (idSelectedTask !== null) {
            getTaskById(idSelectedTask).then((data) => setSelectedTaskData(data));
        }
        else {
            setSelectedTaskData(null);
        }
    }, [idSelectedTask]);

    const handleCompleteTask = () => {
        completeTaskById(idSelectedTask)
            .then(() => getTaskById(idSelectedTask))
            .then((data) => setSelectedTaskData(data));
    };

    const handleCancelTask = () => {
        cancelTaskById(idSelectedTask)
            .then(() => getTaskById(idSelectedTask))
            .then((data) => setSelectedTaskData(data));
    };

    const handlePauseTask = () => {
        pauseTaskById(idSelectedTask)
            .then(() => getTaskById(idSelectedTask))
            .then((data) => setSelectedTaskData(data));
    };

    const handleStartTask = () => {
        startTaskById(idSelectedTask)
            .then(() => getTaskById(idSelectedTask))
            .then((data) => setSelectedTaskData(data));
    };

    const handleResumeTask = () => {
        resumeTaskById(idSelectedTask)
            .then(() => getTaskById(idSelectedTask))
            .then((data) => setSelectedTaskData(data));
    };

    const handleReassignTask = (userId) => {
        assignTaskToUser(selectedTaskData.id, userId)
            .then(() => getTaskById(idSelectedTask))
            .then((data) => setSelectedTaskData(data));
    };

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
            <Select
                value={taskFilterSelector}
                onChange={(event) => setTaskFilterSelector(event.target.value)}
                sx={{
                    width: '100%',
                }}
            >
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="all">All</MenuItem>
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

    const taskContentView = selectedTaskData === null ? (
        <Paper
            sx={{
                position: 'relative',
                width: 'fit-content',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                padding: 2,
            }}
        >
            <Typography>
                No task selected.
            </Typography>
        </Paper>
    ) : (
        <Stack
            direction="column"
            padding={1}
            spacing={1}
        >
            <Stack
                direction="row"
                spacing={1}
            >
                <Box sx={{ width: '60%' }}><TaskInformationPanel task={selectedTaskData} /></Box>
                <Box sx={{ width: '40%' }}>
                    <TaskStagePanel
                        task={selectedTaskData}
                        startTask={handleStartTask}
                        pauseTask={handlePauseTask}
                        resumeTask={handleResumeTask}
                        cancelTask={handleCancelTask}
                        completeTask={handleCompleteTask}
                    />
                </Box>
            </Stack>
            <Stack
                direction="row"
                spacing={1}
            >
                <Box sx={{ width: '60%' }}><TaskProjectPanel task={selectedTaskData} /></Box>
                <Box sx={{ width: '40%' }}>
                    <TaskAssigneePanel
                        task={selectedTaskData}
                        reassignTask={handleReassignTask}
                    />
                </Box>
            </Stack>
            <Stack
                direction="row"
                spacing={1}
            >
                <Box sx={{ width: '50%' }}><TaskListIndependentTasks task={selectedTaskData} /></Box>
                <Box sx={{ width: '50%' }}><TaskListDependentTasks task={selectedTaskData} /></Box>
            </Stack>
        </Stack>
    )

    return (
        <ListAndContentView
            list={taskListItems}
            buttonBar={buttonBar}
            content={taskContentView}
        />
    );
}

export default Tasks;