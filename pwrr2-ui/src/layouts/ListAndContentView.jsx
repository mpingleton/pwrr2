import React from 'react';

import {
    Stack,
    List,
    Box,
    Divider,
} from '@mui/material';

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
                    minWidth: '400px',
                    height: '100%',
                }}
            >
                {props.buttonBar}
                <Divider />
                <List
                    sx={{
                        width: '100%',
                        height: '100%',
                        overflow: 'scroll'
                    }}
                >
                    {props.list}
                </List>
            </Stack>
            <Divider
                flexItem
                orientation='vertical'
            />
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