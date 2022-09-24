import React from 'react';

import {
    Paper,
    Stack,
    Typography,
    Divider,
    Box,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

function ProjectContactsPanel(props) {

    const columns = [
        { field: 'rank', headerName: 'Rank', width: 100 },
        { field: 'firstName', headerName: 'First Name', width: 120 },
        { field: 'lastName', headerName: 'Last Name', width: 120 },
        { field: 'phone', headerName: 'Phone', width: 120 },
        { field: 'email', headerName: 'Email', width: 200 },
    ];

    return (
        <Paper
            sx={{ padding: 2 }}
        >
            <Stack
                direction="column"
                spacing={2}
            >
                <Typography variant="h5">Contacts</Typography>
                <Divider />
                <Box sx={{ height: '300px' }}>
                    <DataGrid
                        rows={props.project.contacts}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                    />
                </Box>
            </Stack>
        </Paper>
    );
}

export default ProjectContactsPanel;