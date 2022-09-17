import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

function PrimaryRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/tasks" element={<MainLayout element={undefined} />} />
                <Route path="/projects" element={<MainLayout element={undefined} />} />
                <Route path="/dashboard" element={<MainLayout element={undefined} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default PrimaryRouter;