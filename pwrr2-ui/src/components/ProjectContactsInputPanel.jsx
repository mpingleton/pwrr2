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
import AddContactDialog from '../dialogs/AddContactDialog';

function ContactPanel(props) {
    const [isAddContactDialogOpen, setAddContactDialogOpen] = useState(false);

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
                {contactRows}
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