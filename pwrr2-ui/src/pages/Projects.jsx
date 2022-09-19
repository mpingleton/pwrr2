import React, { useState, useEffect } from 'react';
import ListAndContentView from '../layouts/ListAndContentView';
import ProjectListItem from '../components/ProjectListItem';

import {
    Button,
    Stack,
} from '@mui/material';

import getProjectsInGroup from '../api/projects/getProjectsInGroup';

function Projects() {
    const [projectList, setProjectList] = useState(null);

    useEffect(() => {
        getProjectsInGroup(1).then((data) => setProjectList(data.data));
    }, []);

    if (projectList === null) {
        return (<h1>Loading...</h1>);
    }

    const buttonBar = (
        <Button
            variant="contained"
        >
            New
        </Button>
    );

    const projectListItems = projectList.map((project) => (
        <ProjectListItem
            title={project.title}
            controlNumber={project.id}
            status="Submitted"
        />
    ));

    return (
        <ListAndContentView
            list={projectListItems}
            buttonBar={buttonBar}
        />
    );
}

export default Projects;