import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
    Paper,
    Stack,
    TextField,
    Button,
    Typography,
} from '@mui/material';

import login from '../api/auth/login';

function Login() {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [passphrase, setPassphrase] = useState('');

    function handleLogin() {
        login(username, passphrase)
            .then(() => navigate('/dashboard', { replace: true }));
    }

    return (
        <Paper
            sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '400px',
                transform: 'translate(-50%, -50%)',
                padding: 2,
            }}
        >
            <Stack
                direction="column"
                spacing={1}
            >
                <Typography>
                    Please log in:
                </Typography>
                <TextField
                    value={username}
                    variant='outlined'
                    label='Username'
                    onChange={(event) => setUsername(event.target.value)}
                />
                <TextField
                    value={passphrase}
                    variant='outlined'
                    label='Passphrase'
                    onChange={(event) => setPassphrase(event.target.value)}
                />
                <Stack
                    direction="row"
                    justifyContent='end'
                >
                    <Button
                        variant="contained"
                        onClick={handleLogin}
                    >
                        Login
                    </Button>
                </Stack>
            </Stack>
        </Paper>
    );
}

export default Login;