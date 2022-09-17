import React from 'react';

import {
    Paper,
    Stack,
    TextField,
    Button,
    Typography,
} from '@mui/material';

function Login() {
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
                    variant='outlined'
                    label='Username'
                />
                <TextField
                    variant='outlined'
                    label='Passphrase'
                />
                <Stack
                    direction="row"
                    justifyContent='end'
                >
                    <Button
                        variant="contained"
                    >
                        Login
                    </Button>
                </Stack>
            </Stack>
        </Paper>
    );
}

export default Login;