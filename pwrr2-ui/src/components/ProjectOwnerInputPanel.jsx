import React, { useState, useEffect } from 'react';

import {
    Paper,
    Stack,
    Select,
    Divider,
    Typography,
    MenuItem,
} from '@mui/material';

import getGroupsInMe from '../api/groups/getGroupsInMe';

function ProjectOwnerInputPanel(props) {
    const [groupList, setGroupList] = useState([]);

    useEffect(() => {
        getGroupsInMe().then((data) => setGroupList(data.data));
    }, []);

    const groupRows = groupList.map((group) => (
        <MenuItem value={group.id}>{group.name}</MenuItem>
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
                <Typography variant="h5">Owner</Typography>
                <Divider />
                <Select
                    label="Group"
                    value={props.ownerId}
                    onChange={(event) => props.setOwnerId(event.target.value)}
                >
                    {groupRows}
                </Select>
            </Stack>
        </Paper>
    );
}

export default ProjectOwnerInputPanel;