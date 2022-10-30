import { gql } from '@apollo/client';

export const GET_EPISODES = gql`
    query getEpisodes($page: Int!) {
        episodes(page: $page) {
            info {
                pages
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

export const GET_EPISODE = gql`
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
