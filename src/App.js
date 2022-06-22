import React from 'react';
import HomePage from './pages/Home/HomePage';
import DetailPage from './pages/Detail/DetailPage';
import { Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <div className="App">
            <header className="app-header">
                <img className="main-logo" alt="Rick and Morty Logo" src="img/Logo.png" />
            </header>
            <main className="container">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="detail/:episodeId" element={<DetailPage />} />
                </Routes>
            </main>
        </div>
    );
};

export default App;
