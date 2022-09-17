import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    AppBar,
    Toolbar,
    Drawer,
    IconButton,
    Paper,
    InputBase
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';

function MainLayout(props) {
    const NavigationDrawer = (
        <Drawer
            anchor='left'
            open={true}
            onClose={() => {}}
        >
            
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
            >
                <NotificationIcon />
            </IconButton>
        </Box>
    );

    const MainAppBar = (
        <AppBar position="static">
            <Toolbar
                sx={{
                    justifyContent: "space-evenly"
                }}
            >
                {AppBarLeft}
                {AppBarCenter}
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