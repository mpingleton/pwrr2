import React, { useState } from 'react';

import {
    Paper,
    Stack,
    TextField,
    Typography,
    Button,
    Divider,
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

function ProjectStageInputPanel(props) {
    const [stageDesc, setStageDesc] = useState('');
    const [stageDue, setStageDue] = useState(new Date());

    const addStage = () => {
        const concatStage = props.stages.concat({ description: stageDesc, dueDate: stageDue });
        props.setStages(concatStage);
        setStageDesc('');
        setStageDue(new Date());
    };

    const currentStageComponents = props.stages.map((stage) => (
        <Stack
            direction="row"
            justifyContent="space-between"
        >
            <Typography variant="subtitle1">{stage.description}</Typography>
            <Typography variant="subtitle1">{new Date(stage.dueDate).toDateString()}</Typography>
            <Button variant="contained">Up</Button>
            <Button variant="contained">Down</Button>
            <Button variant="contained">Delete</Button>
        </Stack>
    ));

    return (
        <Paper
            sx={{
                padding: 2,
            }}
        >
            <Stack
                direction="column"
                spacing={2}
            >
                <Typography variant="h5">Stages</Typography>
                <Divider />
                {currentStageComponents}
                <Stack
                    direction="row"
                    spacing={1}
                >
                    <TextField
                        value={stageDesc}
                        onChange={(event) => setStageDesc(event.target.value)}
                        sx={{ width: '100%' }}
                        label='New Stage'
                    />
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                        <DesktopDatePicker
                            label='Due Date'
                            value={stageDue}
                            onChange={(date) => setStageDue(date)}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                    <Button
                        variant="contained"
                        onClick={addStage}
                    >
                        Add
                    </Button>
                </Stack>
            </Stack>
        </Paper>
    );
}

export default ProjectStageInputPanel;