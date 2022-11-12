import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    AppBar,
    Toolbar,
    Drawer,
    IconButton,
    Paper,
    InputBase,
    ListItem,
    ListItemIcon,
    Divider,
    List,
    ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import BackIcon from '@mui/icons-material/NavigateBefore';
import ForwardIcon from '@mui/icons-material/NavigateNext';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

import getMyNotifications from '../api/notifications/getMyNotifications';

function MainLayout(props) {
    const navigate = useNavigate();
    const [isNavigationDrawerOpen, setNavigationDrawerOpen] = useState(false);
    const [isNotificationDrawerOpen, setNotificationDrawerOpen] = useState(false);
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        getMyNotifications().then((data) => setNotifications(data.data));
    }, []);

    const NavigationDrawer = (
        <Drawer
            variant='persistent'
            anchor='left'
            open={isNavigationDrawerOpen}
            onClose={() => setNavigationDrawerOpen(false)}
            sx={{
                zIndex: 2,
                width: 300,
                '& .MuiDrawer-paper': {
                    width: 300,
                    boxSizing: 'border-box'
                },
            }}
        >
            <Toolbar>
                <IconButton
                    edge='end'
                    color='inherit'
                    sx={{ marginLeft: 'auto' }}
                    onClick={() => setNavigationDrawerOpen(false)}
                >
                    <BackIcon />
                </IconButton>
            </Toolbar>
            <Divider />
            <List>
                <ListItem
                    button
                    onClick={() => {
                        setNavigationDrawerOpen(false);
                        navigate('/dashboard', { replace: true });
                    }}
                >
                    <ListItemIcon>
                        <ArrowCircleRightIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItem>
                <ListItem
                    button
                    onClick={() => {
                        setNavigationDrawerOpen(false);
                        navigate('/projects', { replace: true });
                    }}
                >
                    <ListItemIcon>
                        <ArrowCircleRightIcon />
                    </ListItemIcon>
                    <ListItemText primary="Projects" />
                </ListItem>
                <ListItem
                    button
                    onClick={() => {
                        setNavigationDrawerOpen(false);
                        navigate('/tasks', { replace: true });
                    }}
                >
                    <ListItemIcon>
                        <ArrowCircleRightIcon />
                    </ListItemIcon>
                    <ListItemText primary="Tasks" />
                </ListItem>
            </List>
        </Drawer>
    );

    const NotificationDrawer = (
        <Drawer
            variant='persistent'
            anchor='right'
            open={isNotificationDrawerOpen}
            onClose={() => setNotificationDrawerOpen(false)}
            sx={{
                zIndex: 2,
                width: 500,
                '& .MuiDrawer-paper': {
                    width: 500,
                    boxSizing: 'border-box'
                },
            }}
        >
            <Toolbar>
                <IconButton
                    edge='start'
                    color='inherit'
                    sx={{ marginRight: 'auto' }}
                    onClick={() => setNotificationDrawerOpen(false)}
                >
                    <ForwardIcon />
                </IconButton>
            </Toolbar>
            <Divider />
            <List
                sx={{
                    overflow: 'scroll'
                }}
            >
                {notifications.map((notif) => (
                    <ListItem button>
                        <ListItemText
                            primary={notif.action}
                            secondary="Notification description goes here."
                            sx={{
                                textAlign: 'start'
                            }}
                        />
                        <ListItemText
                            secondary={new Date(notif.timestamp).toLocaleString()}
                            sx={{
                                textAlign: 'end'
                            }}
                        />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );

    const AppBarLeft = (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-start'
            }}
        >
            <IconButton
                size='large'
                edge='start'
                color='inherit'
                onClick={() => setNavigationDrawerOpen(true)}
            >
                <MenuIcon />
            </IconButton>
        </Box>
    );

    const AppBarCenter = (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center'
            }}
        >
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search ticket or task..."
                />
                <IconButton
                    type='button'
                    sx={{ p: '10px' }}
                >
                    <SearchIcon />
                </IconButton>
            </Paper>
        </Box>
    );

    const AppBarRight = (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-end'
            }}
        >
            <IconButton
                size='large'
                edge='end'
                color='inherit'
                onClick={() => setNotificationDrawerOpen(true)}
            >
                <NotificationIcon />
            </IconButton>
        </Box>
    );

    // Add {AppBarCenter} to add the search bar back.
    const MainAppBar = (
        <AppBar position="static">
            <Toolbar
                sx={{
                    justifyContent: "space-evenly"
                }}
            >
                {AppBarLeft}
                {AppBarRight}
            </Toolbar>
        </AppBar>
    );

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100vw',
                height: '100vh'
            }}
        >
            {NavigationDrawer}
            {NotificationDrawer}
            {MainAppBar}
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    overflow: 'scroll'
                }}
            >
                {props.element}
            </Box>
        </Box>
    );
}

export default MainLayout;