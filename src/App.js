import React from 'react';
import { Routes, Route } from 'react-router-dom';

//components
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import ScrollToTop from './components/Layout/ScrollToTop';
import Loader from './components/Common/Loader';

//pages
const HomePage = React.lazy(() => import('./pages/Home/HomePage'));
const DetailPage = React.lazy(() => import('./pages/Detail/DetailPage'));
const FavoritesPage = React.lazy(() => import('./pages/Favorites/FavoritesPage'));

const App = () => {
    return (
        <div className="app">
            <Navbar />
            <header className="app-header">
                <img
                    width="2500"
                    height="827"
                    className="main-logo"
                    alt="Rick and Morty Logo"
                    src="https://res.cloudinary.com/js-media/image/upload/v1656005387/banner_bbydcy.webp"
                />
            </header>
            <main className="container">
                <ScrollToTop>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <React.Suspense fallback={<Loader />}>
                                    <HomePage />
                                </React.Suspense>
                            }
                        />
                        <Route
                            path="/favorites"
                            element={
                                <React.Suspense fallback={<Loader />}>
                                    <FavoritesPage />
                                </React.Suspense>
                            }
                        />
                        <Route
                            path="detail/:episodeId"
                            element={
                                <React.Suspense fallback={<Loader />}>
                                    <DetailPage />
                                </React.Suspense>
                            }
                        />
                    </Routes>
                </ScrollToTop>
            </main>
            <Footer />
        </div>
    );
};

export default App;
