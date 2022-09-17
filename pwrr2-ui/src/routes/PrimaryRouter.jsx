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
                <Route path="/" element={<MainLayout element={undefined} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default PrimaryRouter;