import React from 'react';
import { useQuery} from '@apollo/client';
import client from '../apolloClient';
import { GET_BUSINESSES } from '../api/queries/queries';
import { YelpResponse } from '../api/types';

interface Props {
  location: string;
  term?: string;
}

const YelpBusinessList: React.FC<Props> = ({ location, term }) => {
  // Use the useQuery hook to execute the GraphQL query
  const { loading, error, data } = useQuery<YelpResponse>(GET_BUSINESSES, {
    variables: { location, term },
    context: {
      uri: import.meta.env.VITE_URI_GRAPHQL_AWS_YELP,
    },
    client,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Businesses in {location}</h1>
      <ul>
        {data?.search.business.map((business, index) => (
          <li key={index}>
            <h2>{business.name}</h2>
            <p>Rating: {business.rating} stars</p>
            <p>{business.review_count} reviews</p>
            <p>Address: {business.location.address1}, {business.location.city}</p>
            <p>Category: {business.categories.map(cat => cat.title).join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YelpBusinessList;
