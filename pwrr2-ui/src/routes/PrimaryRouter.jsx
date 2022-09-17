import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Dashboard from '../pages/Dashboard';
import Projects from '../pages/Projects';
import Tasks from '../pages/Tasks';

function PrimaryRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/tasks" element={<MainLayout element={<Tasks />} />} />
                <Route path="/projects" element={<MainLayout element={<Projects />} />} />
                <Route path="/dashboard" element={<MainLayout element={<Dashboard />} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default PrimaryRouter;