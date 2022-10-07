import React from 'react';

import {
    Paper,
    Stack,
    Typography,
    Divider,
    Box,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

function ProjectAttachmentPanel(props) {

    const columns = [
        { field: 'filename', headerName: 'Filename', width: 200 },
        { field: 'uploader', headerName: 'Uploaded By', width: 200 },
    ];

    return (
        <Paper
            sx={{ padding: 2 }}
        >
            <Stack
                direction="column"
                spacing={2}
            >
                <Typography variant="h5">Attachments</Typography>
                <Divider />
                <Box sx={{ height: '300px' }}>
                    <DataGrid
                        rows={[]}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                    />
                </Box>
            </Stack>
        </Paper>
    );
}

export default ProjectAttachmentPanel;