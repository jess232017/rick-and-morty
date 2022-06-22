import React from 'react';

import { useSelector } from 'react-redux';
import Episode from '../../components/Episode';

const FavoritesPage = () => {
    const data = useSelector((state) => state.favorites);
    return (
        <div>
            <h1 className="main-title">Lista de episodios favoritos</h1>
            <div className="episodes-grid">
                {data?.favorites.map((data) => (
                    <Episode {...data} key={data.episode} />
                ))}
            </div>
        </div>
    );
};

export default FavoritesPage;
