import React from 'react';
import { useQuery, gql } from '@apollo/client';

import Episode from '../../components/Episode';

const GET_EPISODES = gql`
    query {
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

    return (
        <div className="episodes-grid">
            {data?.episodes?.results.map((data) => (
                <Episode {...data} key={data.episode} />
            ))}
        </div>
    );
};

export default HomePage;
