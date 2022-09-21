import React from 'react';

import {
    Stack,
    Typography,
    ListItem,
    Divider,
    Box,
} from '@mui/material';

function ProjectListItem(props) {

    const status = () => {
        if (props.project.completedDate !== null) {
            return 'Completed';
        }
        else if (props.project.cancelledDate !== null) {
            return 'Cancelled';
        }
        else {
            return 'In Progress';
        }
    };

    return (
        <ListItem
            button
            selected={props.selected}
            onClick={props.onClick}
            sx={{
                padding: 0,
            }}
        >
            <Stack
                direction="column"
                spacing={1}
                sx={{
                    width: '100%',
                    height: 'fit-content',
                }}
            >
                <Divider />
                <Box sx={{ overflowX: 'scroll', overflowY: 'hidden', whiteSpace: 'nowrap' }}><Typography sx={{ width: '100%' }} variant='h6'>{props.project.title}</Typography></Box>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                >
                    <Typography variant='subtitle2'>{props.project.id}</Typography>
                    <Typography variant='subtitle2'>Needs Attention</Typography>
                    <Typography variant='subtitle2'>{status()}</Typography>
                </Stack>
            </Stack>
        </ListItem>
    );
}

export default ProjectListItem;