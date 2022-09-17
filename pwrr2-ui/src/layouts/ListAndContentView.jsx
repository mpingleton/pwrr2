import React from 'react';

import {
    Stack,
} from '@mui/material';
import { Box } from '@mui/system';

function ListAndContentView(props) {
    return (
        <Stack
            direction='row'
            sx={{
                width: '100%',
                height: '100%'
            }}
        >
            <Stack
                direction='column'
                sx={{
                    width: '400px',
                    height: '100%',
                    overflow: 'scroll',
                }}
            >
                {props.listItems}
            </Stack>
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    overflow: 'scroll',
                }}
            >
                {props.content}
            </Box>
        </Stack>
    );
}

export default ListAndContentView;