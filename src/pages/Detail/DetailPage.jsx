import React from 'react';

import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

var dice = 3;
var sides = 6;
var query = `query RollDice($dice: Int!, $sides: Int) {
  rollDice(numDice: $dice, numSides: $sides)
}`;

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
                location {
                    name
                    id
                }
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

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return <pre>{JSON.stringify(data)}</pre>;
};

export default DetailPage;
