import React, { useState, useEffect } from 'react';

import {
    Stack, Typography,
} from '@mui/material';

import getDashboard from "../api/dashboard/getDashboard";

function Dashboard() {
    const [data, setData] = useState(null);

    useEffect(() => {
        getDashboard().then((data) => setData(data));
    }, []);

    if (data === null) {
        return (<Typography variant="h1">Loading...</Typography>);
    }

    return (
        <Stack
            direction='column'
            spacing={1}
        >
            
        </Stack>
    );
}

export default Dashboard;