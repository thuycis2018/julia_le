// src/queries.ts
import { gql } from '@apollo/client';

export const GET_BUSINESSES = gql`
  query {
    search(term: "restaurant", location: "New York City", categories: ["restaurants"], price: ["$$"], limit: 5) {
      business {
        name
        rating
        location {
          address1
          city
          state
          zip_code
        }
        phone
        website
        review_count
        hours {
          open {
            start
            end
            day
          }
        }
        categories {
          title
        }
      }
    }
  }
`;

export const SEARCH_REPOSITORIES = gql`
  query SearchRepositories($query: String!, $first: Int!) {
    search(query: $query, type: REPOSITORY, first: $first) {
      edges {
        node {
          ... on Repository {
            name
            owner {
              login
            }
            url
            description
            stargazerCount
            forkCount
          }
        }
      }
    }
  }
`;
