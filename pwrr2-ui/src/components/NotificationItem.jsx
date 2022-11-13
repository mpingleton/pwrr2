import React from 'react';

import {
    ListItem,
    ListItemText,
} from '@mui/material';

function NotificationItem(props) {

    const notifTitle = (action) => {
        if (action === "") {
            return "";
        }
        else if (action === "CANCEL_TASK") {
            return "Task Cancelled";
        }
        else if (action === "COMPL_TASK") {
            return "Task Completed";
        }
        else if (action === "NEW_TASK") {
            return "New Task";
        }
        else if (action === "PAUSE_TASK") {
            return "Task Paused";
        }
        else if (action === "RESUM_TASK") {
            return "Task Resumed";
        }
        else if (action === "START_TASK") {
            return "Task Started";
        }
        else {
            return action;
        }
    };

    return (
        <ListItem button>
            <ListItemText
                primary={notifTitle(props.notification.action)}
                secondary={props.notification.taskId}
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