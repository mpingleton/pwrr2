import React from 'react';

import {
    Paper,
    Stack,
    Typography,
    Divider,
    Box,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

function ProjectCommentPanel(props) {

    const columns = [
        { field: 'comment', headerName: 'Comment', width: 200 },
        { field: 'userId', headerName: 'Commenter', width: 150 },
        { field: 'timestamp', headerName: 'Timestamp', width: 150 },
    ];

    return (
        <Paper
            sx={{ padding: 2 }}
        >
            <Stack
                direction="column"
                spacing={2}
            >
                <Typography variant="h5">Comments</Typography>
                <Divider />
                <Box sx={{ height: '300px' }}>
                    <DataGrid
                        rows={props.project.comments}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                    />
                </Box>
            </Stack>
        </Paper>
    );
}

export default ProjectCommentPanel;