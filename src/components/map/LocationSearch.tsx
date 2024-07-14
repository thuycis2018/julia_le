
import React, { Fragment, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../app/store';
import { fetchPlaces, setTerm } from './locationSearchSlice';
import { Place} from '../../api/types/place';

interface LocationSearchProps {
  onPlaceClick: (place: Place) => void;
}

const LocationSearch: React.FC<LocationSearchProps> = ({ onPlaceClick }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { places, term } = useSelector((state: RootState) => state.locationSearch);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(fetchPlaces({ term }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="font-bold mr-5" htmlFor="term">
          Search
        </label>
        <input
          className="border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 px-4 py-2"
          id="term"
          value={term}
          onChange={(e) => dispatch(setTerm(e.target.value))}
        />
      </form>
      <div className="font-bold mt-6">Found Locations</div>
      <div className="grid grid-cols-[1fr_40px] gap-2 mt-2 items-center">
        {places.map((place) => (
          <Fragment key={place.id}>
            <p className="text-sm">{place.name}</p>
            <button
              className="bg-green-500 text-xs text-white font-bold py-1 px-1 rounded active:border-green-500 active:bg-gray-500 focus:bg-blue-500 focus:outline-none"
              onClick={() => onPlaceClick(place)}
            >
              Go
            </button>
            <div className="border-b w-full col-span-2" />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default LocationSearch;
