import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
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
      <div className="py-5"><FontAwesomeIcon icon={faLaptopCode} className="mr-2" /> This feature uses React frontend (TypeScript and Apollo) sending GraphQL query to AWS API Gateway triggering AWS Lambda (Python) to call Yelp GraphQL endpoint passing API Token and return search result. API Token can be stored in AWS Secret Manager and then use AWS SDK to pull it in Lambda function.</div>
      
      <h1 className="text-center font-bold text-2xl p-4">Coffee Shops in {location}</h1>
      <ul className="space-y-4">
        {data?.search.business.map((business, index) => (
          <li key={index} className="items-start p-4 bg-gray-50 border border-gray-300 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-1">{business.name}</h2>
            <p className="text-gray-700">Rating: {business.rating} stars</p>
            <p className="text-gray-700">{business.review_count} reviews</p>
            <p className="text-gray-700">Address: {business.location.address1}, {business.location.city}</p>
            <p className="text-gray-700">Category: {business.categories.map(cat => cat.title).join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YelpBusinessList;
