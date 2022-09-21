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

    const validated = () => {

        const isCompleted = (
            (props.project.validatedDate !== null)
        );

        const icon = () => {
            if (isCompleted) {
                return (<Done />);
            }
            else {
                return (<Stream />);
            }
        };

        const caption = () => {
            if (isCompleted) {
                return 'Validated';
            }
            else {
                return 'Validation';
            }
        };

        const dateComponent = () => {
            if (isCompleted) {
                return (
                    <Stack
                        direction="column"
                        alignItems='center'
                    >
                        <Typography variant='subtitle2'>{new Date(props.project.validatedDate).toDateString()}</Typography>
                    </Stack>
                );
            }
            else if (props.project.validationDueDate !== null) {
                return (
                    <Stack
                        direction="column"
                        alignItems='center'
                    >
                        <Typography variant='subtitle2'>Due</Typography>
                        <Typography variant='subtitle2'>{new Date(props.project.validationDueDate).toDateString()}</Typography>
                    </Stack>
                );
            }
            else {
                return null;
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
                {dateComponent()}
            </Stack>
        );
    };

    const planned = () => {

        const isCompleted = (
            (props.project.plannedDate !== null)
        );

        const isPending = (
            (props.project.validatedDate === null)
        );

        const isInProgress = (
            (props.project.validatedDate !== null) &&
            (props.project.plannedDate === null)
        );

        const icon = () => {
            if (isCompleted) {
                return (<Done />);
            }
            else if (isPending) {
                return (<Pending />);
            }
            else if (isInProgress) {
                return (<Stream />);
            }
        };

        const caption = () => {
            if (isCompleted) {
                return 'Planned';
            }
            else {
                return 'Planning';
            }
        };

        const dateComponent = () => {
            if (isCompleted) {
                return (
                    <Stack
                        direction="column"
                        alignItems='center'
                    >
                        <Typography variant='subtitle2'>{new Date(props.project.plannedDate).toDateString()}</Typography>
                    </Stack>
                );
            }
            else if (props.project.planningDueDate !== null) {
                return (
                    <Stack
                        direction="column"
                        alignItems='center'
                    >
                        <Typography variant='subtitle2'>Due</Typography>
                        <Typography variant='subtitle2'>{new Date(props.project.planningDueDate).toDateString()}</Typography>
                    </Stack>
                );
            }
            else {
                return null;
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
                {dateComponent()}
            </Stack>
        );
    };

    const implemented = () => {

        const isCompleted = (
            (props.project.implementedDate !== null)
        );

        const isPending = (
            (props.project.validatedDate === null) ||
            (props.project.plannedDate === null)
        );

        const isInProgress = (
            (props.project.validatedDate !== null) &&
            (props.project.plannedDate !== null) &&
            (props.project.implementedDate === null)
        );

        const icon = () => {
            if (isCompleted) {
                return (<Done />);
            }
            else if (isPending) {
                return (<Pending />);
            }
            else if (isInProgress) {
                return (<Stream />);
            }
        };

        const caption = () => {
            if (isCompleted) {
                return 'Implemented';
            }
            else {
                return 'Implementation';
            }
        };

        const dateComponent = () => {
            if (isCompleted) {
                return (
                    <Stack
                        direction="column"
                        alignItems='center'
                    >
                        <Typography variant='subtitle2'>{new Date(props.project.implementedDate).toDateString()}</Typography>
                    </Stack>
                );
            }
            else if (props.project.implementationDueDate !== null) {
                return (
                    <Stack
                        direction="column"
                        alignItems='center'
                    >
                        <Typography variant='subtitle2'>Due</Typography>
                        <Typography variant='subtitle2'>{new Date(props.project.implementationDueDate).toDateString()}</Typography>
                    </Stack>
                );
            }
            else {
                return null;
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
                {dateComponent()}
            </Stack>
        );
    };

    const completed = () => {

        const isCompleted = (
            (props.project.validatedDate !== null) &&
            (props.project.plannedDate !== null) &&
            (props.project.implementedDate !== null) &&
            (props.project.cancelledDate === null)
        );

        const isCancelled = (props.project.cancelledDate);

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
            </Stack>
        );
    };

    return (
        <Paper
            sx={{
                width: '50%',
                height: '100%',
                boxSizing: 'border-box',
                padding: 2,
            }}
        >
            <Stack
                direction="column"
                spacing={1}
            >
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
                {validated()}
                <Divider />
                {planned()}
                <Divider />
                {implemented()}
                <Divider />
                {completed()}
                <Divider />
            </Stack>
        </Paper>
    );
}

export default ProjectStagePanel;