import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Warning from '../pages/Warning';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Projects from '../pages/Projects';
import NewProject from '../pages/NewProject';
import Tasks from '../pages/Tasks';

function PrimaryRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/tasks"
                    element={
                        <MainLayout
                            title="Tasks"
                            element={<Tasks />}
                        />
                    }
                />
                <Route
                    path='/projects/new'
                    element={
                        <MainLayout
                            title="New Project"
                            element={<NewProject />}
                        />
                    }
                />
                <Route
                    path="/projects"
                    element={
                        <MainLayout
                            title="Projects"
                            element={<Projects />}
                        />
                    } 
                />
                <Route
                    path="/dashboard"
                    element={
                        <MainLayout
                            title="Dashboard"
                            element={<Dashboard />}
                        />
                    }
                />
                <Route
                    path="/login"
                    element={
                        <Login />
                    }
                />
                <Route
                    path="/"
                    element={
                        <Warning />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default PrimaryRouter;