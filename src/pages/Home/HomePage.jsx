import React, { useState } from 'react';
import { useQuery } from '@apollo/client';

import Loader from '../../components/Common/Loader';
import Episode from '../../components/Common/Episode';
import { GET_EPISODES } from '../../utils/graphql/query/episodes';

const HomePage = () => {
    const [page, setPage] = useState(1);
    const { loading, error, data, fetchMore } = useQuery(GET_EPISODES, {
        variables: { page },
    });

    const loadMore = () => {
        fetchMore({
            variables: { page: page + 1 },
        });
        setPage(page + 1);
    };

    if (loading) return <Loader />;
    if (error) return <p>Error :(</p>;

    return (
        <>
            <h1 className="main-title">Lista de episodios</h1>

            <div className="episodes-grid">
                {data?.episodes?.results.map((data) => (
                    <Episode {...data} key={data.episode} />
                ))}
            </div>
            {page < data?.episodes?.info?.pages && (
                <div className="episodes-more">
                    <button className="btn " onClick={loadMore}>
                        Ver más episodios<span>📺</span>
                    </button>
                </div>
            )}
        </>
    );
};

export default HomePage;
