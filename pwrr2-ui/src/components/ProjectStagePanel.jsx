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

function ProjectStagePanel(props) {

    const submitted = () => {

        const submittedDate = new Date(props.project.submittedDate);

        return (
            <Stack
                direction="row"
                spacing={1}
                justifyContent='space-between'
                alignItems='center'
            >
                <Done />
                <Typography variant='subtitle1'>Submitted</Typography>
                <Stack
                    direction="column"
                    alignItems='center'
                >
                    <Typography variant='subtitle2'>{submittedDate.toDateString()}</Typography>
                </Stack>
            </Stack>
        );
    };

    const completed = () => {

        const isCompleted = (props.project.completedDate !== null);
        const isCancelled = (props.project.cancelledDate !== null);

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
                        <Typography variant='subtitle2'>{new Date(props.project.completedDate).toDateString()}</Typography>
                    </Stack>
                ) : null}
                {isCancelled ? (
                    <Stack
                        direction="column"
                        alignItems='center'
                    >
                        <Typography variant='subtitle2'>{new Date(props.project.cancelledDate).toDateString()}</Typography>
                    </Stack>
                ) : null}
                {!isCompleted && !isCancelled && props.project.dueDate !== null ? (
                    <Stack
                        direction="column"
                        alignItems='center'
                    >
                        <Typography variant='subtitle2'>Due</Typography>
                        <Typography variant='subtitle2'>{new Date(props.project.dueDate).toDateString()}</Typography>
                    </Stack>
                ) : null}
            </Stack>
        );
    };

    const icon = (stage) => {
        if (stage.startedDate === null) {
            return (<Pending />);
        }
        else if (stage.completedDate === null) {
            return (<Stream />);
        }
        else {
            return (<Done />);
        }
    };

    const dateIndicator = (stage) => {
        if (stage.completedDate !== null) {
            return (
                <Stack
                    direction="column"
                    alignItems='center'
                >
                    <Typography variant='subtitle2'>{new Date(stage.completedDate).toDateString()}</Typography>
                </Stack>
            );
        }
        else if (stage.completedDate === null && stage.dueDate !== null) {
            return (
                <Stack
                    direction="column"
                    alignItems='center'
                >
                    <Typography variant='subtitle2'>Due</Typography>
                    <Typography variant='subtitle2'>{new Date(stage.dueDate).toDateString()}</Typography>
                </Stack>
            );            
        }
    };

    const stageComponents = props.project.stages.map((stage) => [(
        <Stack
            direction="row"
            spacing={1}
            justifyContent='space-between'
            alignItems='center'
        >
            {icon(stage)}
            <Typography variant='subtitle1'>{stage.description}</Typography>
            {dateIndicator(stage)}
        </Stack>
    ), (<Divider />)]);

    return (
        <Paper
            sx={{ padding: 2 }}
        >
            <Stack
                direction="column"
                spacing={1}
            >
                <Typography variant="h5">Stages and Status</Typography>
                <Divider />
                <Button
                    variant='contained'
                    sx={{ width: '100%' }}
                >
                    Complete
                </Button>
                <Stack
                    direction="row"
                    spacing={1}
                >
                    <Button
                        variant="contained"
                        sx={{ width: '100%' }}
                        onClick={props.advanceStage}
                    >
                        Next Stage
                    </Button>
                    <Button
                        variant="contained"
                        sx={{ width: '100%' }}
                    >
                        Cancel
                    </Button>
                </Stack>
                <Divider />
                {submitted()}
                <Divider />
                {stageComponents}
                {completed()}
            </Stack>
        </Paper>
    );
}

export default ProjectStagePanel;