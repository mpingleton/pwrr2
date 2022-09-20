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

function ProjectStagePanel(props) {

    const submitted = () => {
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
                    <Typography variant='subtitle2'>31 Jan 2022</Typography>
                </Stack>
            </Stack>
        );
    };

    const validated = () => {
        return (
            <Stack
                direction="row"
                spacing={1}
                justifyContent='space-between'
                alignItems='center'
            >
                <Done />
                <Typography variant='subtitle1'>Validated</Typography>
                <Stack
                    direction="column"
                    alignItems='center'
                >
                    <Typography variant='subtitle2'>31 Jan 2022</Typography>
                </Stack>
                
            </Stack>
        );
    };

    const planned = () => {
        return (
            <Stack
                direction="row"
                spacing={1}
                justifyContent='space-between'
                alignItems='center'
            >
                <Stream />
                <Typography variant='subtitle1'>Planning</Typography>
                <Stack
                    direction="column"
                    alignItems='center'
                >
                    <Typography variant='subtitle2'>Due</Typography>
                    <Typography variant='subtitle2'>31 Jan 2022</Typography>
                </Stack>
            </Stack>
        );
    };

    const implemented = () => {
        return (
            <Stack
                direction="row"
                spacing={1}
                justifyContent='space-between'
                alignItems='center'
            >
                <Pending />
                <Typography variant='subtitle1'>Implementation</Typography>
                <Stack
                    direction="column"
                    alignItems='center'
                >
                    <Typography variant='subtitle2'>Due</Typography>
                    <Typography variant='subtitle2'>31 Jan 2022</Typography>
                </Stack>
            </Stack>
        );
    };

    const completed = () => {
        return (
            <Stack
                direction="row"
                spacing={1}
                justifyContent='space-between'
                alignItems='center'
            >
                <Pending />
                <Typography variant='subtitle1'>Completion</Typography>
                <Stack
                    direction="column"
                    alignItems='center'
                >
                    <Typography variant='subtitle2'>Due</Typography>
                    <Typography variant='subtitle2'>31 Jan 2022</Typography>
                </Stack>
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