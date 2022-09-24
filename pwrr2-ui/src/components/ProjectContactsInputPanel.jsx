import React, { useState } from 'react';

import {
    Paper,
    Button,
    Stack,
    Divider,
    Typography,
    TextField,
} from '@mui/material';

import getContactById from '../api/contacts/getContactById';

function ContactPanel(props) {
    const [newContactId, setNewContactId] = useState('');

    const contactRows = props.contacts.map((contact) => (
        <Stack
            direction="row"
            justifyContent="space-evenly"
        >
            <Typography>{contact.rank}</Typography>
            <Typography>{contact.firstName}</Typography>
            <Typography>{contact.lastName}</Typography>
            <Typography>{contact.phone}</Typography>
            <Typography>{contact.email}</Typography>
        </Stack>
    ));

    const addContact = () => {
        getContactById(newContactId)
            .then((response) => {
                const newContactList = props.contacts.concat(response);
                props.setContacts(newContactList);
                setNewContactId('');
            });
    };

    return (
        <Paper
            sx={{
                padding: 2,
            }}
        >
            <Stack
                direction="column"
                spacing={2}
            >
                <Typography variant="h5">Contacts</Typography>
                <Divider />
                {contactRows}
                <Stack
                    direction="row"
                    spacing={1}
                >
                    <TextField
                        value={newContactId}
                        onChange={(event) => setNewContactId(event.target.value)}
                        sx={{ width: '100%' }}
                    />
                    <Button
                        variant="contained"
                        onClick={addContact}
                    >
                        Add
                    </Button>
                </Stack>
            </Stack>
        </Paper>
    );
}

export default ContactPanel;