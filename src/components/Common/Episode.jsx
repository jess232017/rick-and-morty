import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { add, remove } from '../../store/features/favSlice';

const Episode = ({ id, name, air_date, episode }) => {
    const dispatch = useDispatch();
    const [exists, setExists] = useState(false);
    const favList = useSelector((state) => state.favorites);
    const date = air_date.split(' ');

    const addEpisode = () => {
        dispatch(add({ id, name, air_date, episode }));
    };

    const removeEpisode = () => {
        dispatch(remove({ id, episode }));
    };

    useEffect(() => {
        const check = favList.favorites?.some((value) => value.episode === episode);
        setExists(check);
    }, [favList, episode]);

    return (
        <article className="card">
            <div className="card-header">
                <img src={`/img/episodes/episode (${id}).webp`} alt={name} loading="lazy" />
                <div className="card-header-date">
                    <span>{date[2]}</span>
                    <span>{date[0].slice(0, 3)}</span>
                </div>
                <div className="card-header-category">{episode}</div>
            </div>
            <div className="card-body">
                <div>
                    <Link to={`/detail/${id}`}>
                        <h1>{name}</h1>
                    </Link>
                    <p>Lorem ipsum "dolor sit amet elit"</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias autem aliquid, recusandae maiores iste fuga,
                        explicabo dolor vitae magnam!
                    </p>
                </div>

                <div className="card-body-footer">
                    {exists ? (
                        <button className="btn btn-secondary" onClick={removeEpisode}>
                            Remover <span>🗑️</span>
                        </button>
                    ) : (
                        <button className="btn btn-secondary" onClick={addEpisode}>
                            Agregar <span>&#10084;</span>
                        </button>
                    )}
                    <Link to={`/detail/${id}`} className="btn">
                        Ver más <span>&rarr;</span>
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default Episode;
