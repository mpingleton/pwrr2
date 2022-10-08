import React, { useState } from 'react';

import {
    Paper,
    Stack,
    Typography,
    Divider,
    Box,
    TextField,
    Button,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import addComment from '../api/projects/addComment';

function ProjectCommentPanel(props) {
    const [comment, setComment] = useState('');

    const columns = [
        { field: 'comment', headerName: 'Comment', width: 400 },
        { field: 'userId', headerName: 'Commenter', width: 150 },
        { field: 'timestamp', headerName: 'Timestamp', width: 150 },
    ];

    const handleAddComment = () => {
        addComment(props.project.id, { comment: comment }).then(() => setComment(''));
    };

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
                <Stack
                    direction="row"
                    spacing={2}
                >
                    <TextField
                        label="Comment"
                        value={comment}
                        sx={{ width: '100%' }}
                        onChange={(event) => setComment(event.target.value)}
                    />
                    <Button
                        variant="contained"
                        onClick={handleAddComment}
                    >
                        Add
                    </Button>
                </Stack>
            </Stack>
        </Paper>
    );
}

export default ProjectCommentPanel;