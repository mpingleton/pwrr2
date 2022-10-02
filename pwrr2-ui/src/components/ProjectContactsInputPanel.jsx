import React, { useState } from 'react';

import {
    Paper,
    Button,
    Stack,
    Divider,
    Typography,
    Box,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import getContactById from '../api/contacts/getContactById';
import AddContactDialog from '../dialogs/AddContactDialog';

function ContactPanel(props) {
    const [isAddContactDialogOpen, setAddContactDialogOpen] = useState(false);

    const columns = [
        { field: 'rank', headerName: 'Rank', width: 100 },
        { field: 'firstName', headerName: 'First Name', width: 120 },
        { field: 'lastName', headerName: 'Last Name', width: 120 },
        { field: 'phone', headerName: 'Phone', width: 120 },
        { field: 'email', headerName: 'Email', width: 200 },
    ];

    const addContact = (contactId) => {
        getContactById(contactId)
            .then((response) => {
                const newContactList = props.contacts.concat(response);
                props.setContacts(newContactList);
            });
        setAddContactDialogOpen(false);
    };

    return (
        <Paper
            sx={{
                padding: 2,
            }}
        >
            <AddContactDialog
                open={isAddContactDialogOpen}
                onClose={() => setAddContactDialogOpen(false)}
                onSelectedContact={addContact}
            />
            <Stack
                direction="column"
                spacing={2}
            >
                <Typography variant="h5">Contacts</Typography>
                <Divider />
                <Box sx={{ height: '300px' }}>
                    <DataGrid
                        rows={props.contacts}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                    />
                </Box>
                <Stack
                    direction="row"
                    spacing={1}
                >
                    <Button
                        variant="contained"
                        onClick={() => setAddContactDialogOpen(true)}
                    >
                        Search
                    </Button>
                </Stack>
            </Stack>
        </Paper>
    );
}

export default ContactPanel;