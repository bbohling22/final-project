import { gql, useQuery } from '@apollo/client';

export const QUERY_USERS = gql`
    query User($username: String!) {
        user(username: $username) {
        _id
        username
        email
        password
        posts {
            _id
            postText
            postAuthor
            createdAt
        }
        }
    }
`