import React, { useState, useEffect } from 'react';

import {
    Modal,
    Box,
    Paper,
    Stack,
    Button,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import getContacts from '../api/contacts/getContacts';

function AddContactDialog(props) {
    const [contactList, setContactList] = useState([]);
    const [contactSelection, setContactSelection] = useState([]);

    useEffect(() => {
        getContacts().then((data) => setContactList(data.data));
    }, []);

    const columns = [
        { field: 'rank', headerName: 'Rank', width: 100 },
        { field: 'firstName', headerName: 'First Name', width: 120 },
        { field: 'lastName', headerName: 'Last Name', width: 120 },
        { field: 'phone', headerName: 'Phone', width: 120 },
        { field: 'email', headerName: 'Email', width: 200 },
    ];

    return (
        <Modal
            open={props.open}
            onClose={props.onClose}
        >
            <Box
                sx={{
                    position: 'absolute',
                    width: '600px',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
            >
                <Paper
                    sx={{
                        padding: 2
                    }}
                >
                    <Stack
                        direction="column"
                        spacing={1}
                    >
                        <Stack
                            direction="row"
                            spacing={1}
                            justifyContent="end"
                        >
                            <Button
                                variant="contained"
                                disabled={contactSelection.length !== 1}
                                onClick={() => props.onSelectedContact(contactSelection[0])}
                            >
                                Add
                            </Button>
                        </Stack>
                        <Box
                            sx={{
                                width: '100%',
                                height: '400px'
                            }}
                        >
                            <DataGrid
                                rows={contactList}
                                columns={columns}
                                pageSize={5}
                                rowsPerPageOptions={[5]}
                                onSelectionModelChange={(selectionModel) => setContactSelection(selectionModel)}
                            />
                        </Box>
                    </Stack>
                </Paper>
            </Box>
        </Modal>
    );
}

export default AddContactDialog;