import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import PrimaryRouter from '../routes/PrimaryRouter';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function AppProvider() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <PrimaryRouter />
        </ThemeProvider>
    );
}

export default AppProvider;