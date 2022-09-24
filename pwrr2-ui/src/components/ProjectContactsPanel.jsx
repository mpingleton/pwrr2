import React from 'react';

import {
    Paper,
    Stack,
    Typography,
    Divider,
} from '@mui/material';

function ProjectContactsPanel(props) {

    const contactComponents = props.project.contacts.map((contact) => (
        <Stack
            direction="row"
            spacing={1}
            justifyContent="space-evenly"
            alignItems="center"
        >
            <Typography variant="subtitle2">{contact.rank}</Typography>
            <Typography variant="subtitle2">{contact.firstName}</Typography>
            <Typography variant="subtitle2">{contact.lastName}</Typography>
            <Typography variant="subtitle2">{contact.phone}</Typography>
            <Typography variant="subtitle2">{contact.email}</Typography>
        </Stack>
    ));

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
                {contactComponents}
            </Stack>
        </Paper>
    );
}

export default ProjectContactsPanel;