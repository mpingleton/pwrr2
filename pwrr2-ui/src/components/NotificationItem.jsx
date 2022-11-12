import React from 'react';

import {
    ListItem,
    ListItemText,
} from '@mui/material';

function NotificationItem(props) {
    return (
        <ListItem button>
            <ListItemText
                primary={props.notification.action}
                secondary="Notification description goes here."
                sx={{
                    textAlign: 'start'
                }}
            />
            <ListItemText
                secondary={new Date(props.notification.timestamp).toLocaleString()}
                sx={{
                    textAlign: 'end'
                }}
            />
        </ListItem>
    );
}

export default NotificationItem;