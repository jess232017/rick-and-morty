import React from 'react';

import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import Character from '../../components/Character';

const GET_EPISODE = gql`
    query GetEpisode($episodeId: ID!) {
        episode(id: $episodeId) {
            name
            air_date
            episode
            created
            characters {
                id
                name
                status
                species
                type
                gender
                image
            }
        }
    }
`;

const DetailPage = () => {
    let { episodeId } = useParams();
    const { loading, error, data } = useQuery(GET_EPISODE, {
        variables: { episodeId },
    });
    const { episode } = data || {};

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <>
            <h1 className="main-title">Detalles</h1>
            <div className="detail-grid">
                <div className="detail-image">
                    <h2>Imagen</h2>
                    <img src="https://tvthumbs.fancaps.net/20219.jpg" alt={episode.name} />
                </div>
                <div className="detail-description">
                    <h2>
                        {episode.name} ({episode.episode})
                    </h2>
                    <hr />
                    <div className="detail-item">
                        <p>Lorem ipsum "dolor sit amet elit"</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias autem aliquid, recusandae maiores iste fuga,
                            explicabo dolor vitae magnam!
                        </p>
                        <hr />
                        <div className="detail-badge">
                            <p>
                                Transmitido el: <br /> <span>{episode.air_date}</span>
                            </p>
                            <p>
                                Creado el:
                                <br /> <span>{episode.created}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="main-title">Personajes del episodio:</h2>
            <div className="characters-grid">
                {episode.characters.map((value) => (
                    <Character key={value.id} {...value} />
                ))}
            </div>
        </>
    );
};

export default DetailPage;
