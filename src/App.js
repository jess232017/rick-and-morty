import React from 'react';

//pages
import HomePage from './pages/Home/HomePage';
import DetailPage from './pages/Detail/DetailPage';
import FavoritesPage from './pages/Favorites/FavoritesPage';

//components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <div className="app">
            <Navbar />
            <header className="app-header">
                <img className="main-logo" alt="Rick and Morty Logo" src="/img/banner.jpg" />
            </header>
            <main className="container">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/favorites" element={<FavoritesPage />} />
                    <Route path="detail/:episodeId" element={<DetailPage />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
};

export default App;
