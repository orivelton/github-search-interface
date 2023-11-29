import { gql } from '@apollo/client'

export const GET_REPO = gql`
  query ($first: Int, $query: String!) {
    search(type: REPOSITORY, query: $query, first: $first) {
      repos: edges {
        repo: node {
          ... on Repository {
            description
            forkCount
            id
            name
            stargazerCount
            url
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        startCursor
      }
    }
  }
`
