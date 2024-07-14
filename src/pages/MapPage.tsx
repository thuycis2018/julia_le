
import { useState } from 'react';
import type { Place } from '../api/types/place';
import Map from '../components/map/Map';
import LocationSearch from '../components/map/LocationSearch';

function MapPage() {
  const [place, setPlace] = useState< Place | null>(null)
  return (
      <div className="h-screen w-screen grid grid-cols-12">
        <div className="col-span-3 p-2">
          <LocationSearch onPlaceClick={(p) => setPlace(p)}/>
        </div>
        <div className="col-span-9">
          <Map place={place} />
        </div>
      </div>
  )
}

export default MapPage
