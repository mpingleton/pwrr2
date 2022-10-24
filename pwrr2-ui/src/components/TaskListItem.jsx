import React from 'react';

import {
    Stack,
    Typography,
    ListItem,
    Divider,
    Box,
} from '@mui/material';

function TaskListItem(props) {

    const status = () => {
        if (props.task.completedDate !== null) {
            return 'Complete';
        }
        else if (props.task.cancelledDate !== null) {
            return 'Cancelled';
        }
        else if (props.task.pausedDate !== null) {
            return 'Paused';
        }
        else if (props.task.startedDate !== null) {
            return 'In Progress';
        }
        else {
            return 'Not Started';
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
                <Box sx={{ overflowX: 'scroll', overflowY: 'hidden', whiteSpace: 'nowrap' }}><Typography sx={{ width: '100%' }} variant='h6'>{props.task.description}</Typography></Box>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                >
                    <Typography variant="subtitle2">{props.task.id}</Typography>
                    <Typography variant="subtitle2">{status()}</Typography>
                </Stack>
            </Stack>
        </ListItem>
    );
}

export default TaskListItem;