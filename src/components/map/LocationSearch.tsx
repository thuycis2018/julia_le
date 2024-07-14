import type { Place } from '../../api/types/place';
import { useState, Fragment } from 'react';
import { search } from '../../api/queries/search'

interface LocationSeachProps {
    onPlaceClick: (place: Place) => void;
}

export default function LocationSearch ({ onPlaceClick }: LocationSeachProps) {
    const [ places, setPlaces] = useState<Place[]>([]);
    const [term, setTerm] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const results = await search(term);
        setPlaces(results);

    };
    return <div>
        <form onSubmit={handleSubmit}>
            <label className="font-bold mr-5" htmlFor="term">
                Search</label>
            <input className="border border-gray-300 rounde-md shadow-sm focus:border-indigo-500 px-4 py-2 rounded" 
                id="term"
                value={term}
                onChange={e => setTerm(e.target.value)} 
            />
        </form>
        <div className="font-bold mt-6">Found Locations</div>
        <div className="grid grid-cols-[1fr_40px] gap-2 mt-2 items-center">
            {
                places.map(place=>{
                    return <Fragment key={place.id}>
                        <p className="text-sm">{place.name}</p>
                        <button className="bg-green-500 text-xs text-white font-bold py-1 px-1 rounded active:border-green-500 active:bg-gray-500 focus:bg-blue-500  focus:outline-none"
                        onClick={() => onPlaceClick(place)}>Go</button>
                        <div className="border-b w-full col-span-2" />
                    </Fragment>
                })
            }
        </div>
    </div>
}