import React, { useState, useEffect } from 'react';
import ListAndContentView from '../layouts/ListAndContentView';
import ProjectListItem from '../components/ProjectListItem';

import {
    Button,
    Stack,
} from '@mui/material';

function Projects() {

    const buttonBar = (
        <Button
            variant="contained"
        >
            New
        </Button>
    );

    const items = [];
    for (let i = 0; i < 100; i++) {
        items.push((<ProjectListItem
            title="This is a project title."
            controlNumber="PWRR00000123"
            status="Status"
        />));
    }

    return (
        <ListAndContentView
            list={items}
            buttonBar={buttonBar}
        />
    );
}

export default Projects;