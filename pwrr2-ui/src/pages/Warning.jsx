import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
    Paper,
    Stack,
    Typography,
    Button,
    Divider,
} from '@mui/material';

function Warning() {
    const navigate = useNavigate();

    const warningText = "This instance of PWRR2 is prototype software.  All data contained and presented by this application is strictly fictional test data.  Do not enter data which corresponds to real entities into this application.  Do not enter classified information into this application.";

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
                <Typography variant="h5">Warning</Typography>
                <Divider />
                <Typography>{warningText}</Typography>
                <Divider/>
                <Stack
                    direction="row"
                    spacing={1}
                    justifyContent="end"
                >
                    <Button
                        variant="contained"
                        onClick={() => navigate('/login', { replace: true })}
                    >
                        Proceed to Login
                    </Button>
                </Stack>
            </Stack>
        </Paper>
    );
}

export default Warning;
