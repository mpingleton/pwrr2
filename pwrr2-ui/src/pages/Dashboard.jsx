import React, { useState, useEffect } from 'react';

import {
    Stack,
    Typography,
    Box,
} from '@mui/material';

import DashboardProjectsPanel from '../components/DashboardProjectsPanel';
import DashboardTasksPanel from '../components/DashboardTasksPanel';

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
            padding={1}
        >
            <Stack
                direction="row"
                spacing={1}
                sx={{ width: '100%' }}
            >
                <Box sx={{ width: '50%' }}><DashboardProjectsPanel data={data} /></Box>
                <Box sx={{ width: '50%' }}><DashboardTasksPanel data={data} /></Box>
            </Stack>
        </Stack>
    );
}

export default Dashboard;