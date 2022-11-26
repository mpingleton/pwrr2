import React from 'react';

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

function ProjectAttachmentPanel(props) {

    const columns = [
        { field: 'filename', headerName: 'Filename', width: 200 },
        { field: 'byteSize', headerName: 'Size', width: 70 },
        { field: 'description', headerName: 'Description', width: 300 },
        { field: 'submitterId', headerName: 'Uploaded By', width: 100 },
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
                        rows={props.project.attachments}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                    />
                </Box>
                <Stack
                    direction="row"
                    spacing={1}
                >
                    <TextField
                        InputProps={{ readOnly: true }}
                        label="Filename..."
                        value={null}
                        sx={{ width: '100%' }}
                    />
                    <Button
                        variant="contained"
                        onClick={() => {}}
                    >
                        Browse
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => {}}
                        disabled
                    >
                        Upload
                    </Button>
                </Stack>
            </Stack>
        </Paper>
    );
}

export default ProjectAttachmentPanel;