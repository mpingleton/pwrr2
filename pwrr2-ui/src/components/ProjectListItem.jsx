import React from 'react';

import {
    Stack,
    Typography,
    ListItem,
    Divider,
    Box,
} from '@mui/material';

function ProjectListItem(props) {

    return (
        <ListItem
            button
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
                <Box sx={{ overflowX: 'scroll', overflowY: 'hidden', whiteSpace: 'nowrap' }}><Typography sx={{ width: '100%' }} variant='h6'>{props.title}</Typography></Box>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                >
                    <Typography variant='subtitle2'>{props.controlNumber}</Typography>
                    <Typography variant='subtitle2'>{props.status}</Typography>
                </Stack>
            </Stack>
        </ListItem>
    );
}

export default ProjectListItem;