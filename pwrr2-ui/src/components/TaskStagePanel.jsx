import React from 'react';

import {
    Button,
    Paper,
    Stack,
    Typography,
    Divider,
} from '@mui/material';
import Done from '@mui/icons-material/Done';
import Stream from '@mui/icons-material/Stream';
import Pending from '@mui/icons-material/PendingOutlined';
import Cancelled from '@mui/icons-material/Cancel';

function TaskStagePanel(props) {

    const started = () => {

        const isStarted = (props.task.startedDate !== null);

        const icon = () => {
            if (isStarted) {
                return (<Done />);
            }
            else {
                return (<Pending />);
            }
        };

        const caption = () => {
            if (isStarted) {
                return 'Started';
            }
            else {
                return 'Not Started';
            }
        };

        return (
            <Stack
                direction="row"
                spacing={1}
                justifyContent='space-between'
                alignItems='center'
            >
                {icon()}
                <Typography variant='subtitle1'>
                    {caption()}
                </Typography>
                {isStarted ? (
                    <Stack
                        direction="column"
                        alignItems='center'
                    >
                        <Typography variant='subtitle2'>{new Date(props.task.startedDate).toDateString()}</Typography>
                    </Stack>
                ) : null}
            </Stack>
        );
    };

    const inProgress = () => {

        const isStarted = (props.task.startedDate !== null);
        const isPaused = (props.task.pausedDate !== null);

        const icon = () => {
            if (isStarted && !isPaused) {
                return (<Stream />);
            }
            else if (isStarted && isPaused) {
                return (<Pending />);
            }
        };

        const caption = () => {
            if (isStarted && !isPaused) {
                return "In Progress";
            }
            else if (isStarted && isPaused) {
                return "Paused";
            }
        };

        return (
            <Stack
                direction="row"
                spacing={1}
                justifyContent='space-between'
                alignItems='center'
            >
                {icon()}
                <Typography variant='subtitle1'>
                    {caption()}
                </Typography>
                {isPaused ? (
                    <Stack
                        direction="column"
                        alignItems='center'
                    >
                        <Typography variant='subtitle2'>{new Date(props.task.pausedDate).toDateString()}</Typography>
                    </Stack>
                ) : null}
            </Stack>
        );
    };

    const completed = () => {

        const isCompleted = (props.task.completedDate !== null);
        const isCancelled = (props.task.cancelledDate !== null);

        const icon = () => {
            if (isCompleted) {
                return (<Done />);
            }
            else if (isCancelled) {
                return (<Cancelled />);
            }
            else {
                return (<Pending />);
            }
        };

        const caption = () => {
            if (isCompleted) {
                return 'Completed';
            }
            else if (isCancelled) {
                return 'Cancelled';
            }
            else {
                return 'Completion';
            }
        };

        return (
            <Stack
                direction="row"
                spacing={1}
                justifyContent='space-between'
                alignItems='center'
            >
                {icon()}
                <Typography variant='subtitle1'>
                    {caption()}
                </Typography>
                {isCompleted ? (
                    <Stack
                        direction="column"
                        alignItems='center'
                    >
                        <Typography variant='subtitle2'>{new Date(props.task.completedDate).toDateString()}</Typography>
                    </Stack>
                ) : null}
                {isCancelled ? (
                    <Stack
                        direction="column"
                        alignItems='center'
                    >
                        <Typography variant='subtitle2'>{new Date(props.task.cancelledDate).toDateString()}</Typography>
                    </Stack>
                ) : null}
                {!isCompleted && !isCancelled && props.task.dueDate !== null ? (
                    <Stack
                        direction="column"
                        alignItems='center'
                    >
                        <Typography variant='subtitle2'>Due</Typography>
                        <Typography variant='subtitle2'>{new Date(props.task.dueDate).toDateString()}</Typography>
                    </Stack>
                ) : null}
            </Stack>
        );
    };

    return (
        <Paper
            sx={{ padding: 2 }}
        >
            <Stack
                direction="column"
                spacing={1}
            >
                <Typography variant="h5">Status</Typography>
                <Divider />
                <Button
                    variant='contained'
                    sx={{ width: '100%' }}
                    onClick={props.task.startedBy === null ? props.startTask : props.completeTask}
                    disabled={props.task.cancelledBy !== null || props.task.completedBy !== null}
                >
                    {props.task.startedBy === null ? "Start" : "Complete"}
                </Button>
                <Stack
                    direction="row"
                    spacing={1}
                >
                    <Button
                        variant="contained"
                        sx={{ width: '100%' }}
                        onClick={props.task.pausedBy === null ? props.pauseTask : props.resumeTask}
                        disabled={props.task.startedBy === null || props.task.cancelledBy !== null || props.task.completedBy !== null}
                    >
                        {props.task.pausedBy === null ? "Pause" : "Resume"}
                    </Button>
                    <Button
                        variant="contained"
                        sx={{ width: '100%' }}
                        onClick={props.cancelTask}
                        disabled={props.task.cancelledBy !== null || props.task.completedBy !== null}
                    >
                        Cancel
                    </Button>
                </Stack>
                <Divider />
                {started()}
                {(props.task.completedDate === null && props.task.startedDate !== null) ? [<Divider />, inProgress()] : null}
                <Divider />
                {completed()}
            </Stack>
        </Paper>
    );
}

export default TaskStagePanel;