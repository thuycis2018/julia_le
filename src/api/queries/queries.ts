import { gql } from '@apollo/client';

export const GET_BUSINESSES = gql`
  query GetBusinesses ($location: String!, $term: String) {
    search(term: $term, location: $location, limit: 10) {
      business {
        name
        rating
        location {
          address1
          city
          state
        }
        phone
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

export const GET_TESTIMONIALS = gql`
  query GetTestimonials {
    allTestimonials (orderBy: [_firstPublishedAt_ASC]) {
      id
      name  
      title
      content
      _status
      _firstPublishedAt
   }
  }
`;
