import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_EPISODES = gql`
    query GetEpisodes {
        episodes(page: 1) {
            info {
                count
            }
            results {
                id
                name
                air_date
                episode
                created
            }
        }
    }
`;

const HomePage = () => {
    const { loading, error, data } = useQuery(GET_EPISODES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.results.map(({ id, name, episode }) => (
        <div key={id}>
            <p>
                {episode}: {name}
            </p>
        </div>
    ));
};

export default HomePage;
