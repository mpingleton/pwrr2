import React from 'react';

import {
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@mui/material';

function NavigationItem(props) {
    return (
        <ListItem
            button
            onClick={props.onClick}
        >
            <ListItemIcon>{props.icon}</ListItemIcon>
            <ListItemText primary={props.text} />
        </ListItem>
    );
}

export default NavigationItem;