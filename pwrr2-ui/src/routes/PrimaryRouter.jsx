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
                            element={<Tasks />}
                        />
                    }
                />
                <Route
                    path='/projects/new'
                    element={
                        <MainLayout
                            element={<NewProject />}
                        />
                    }
                />
                <Route
                    path="/projects"
                    element={
                        <MainLayout
                            element={<Projects />}
                        />
                    } 
                />
                <Route
                    path="/dashboard"
                    element={
                        <MainLayout
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