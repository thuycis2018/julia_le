import 'leaflet/dist/leaflet.css';
import type { Place } from '../api/types/place';
import { Map as LeafletMap } from 'leaflet';
import { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import greenMarker from '../assets/marker-icon-2x-green.png';
import markerShadow from '../assets/marker-shadow.png';

interface MapProps {
    place: Place | null;
}

const greenIcon = new L.Icon({
    iconUrl: greenMarker,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

export default function Map({ place }: MapProps ){
    const mapRef = useRef<LeafletMap | null>(null);
    useEffect(() => {
        if(mapRef.current && place){
            mapRef.current.flyTo([place.latitude, place.longitude], 14, {duration: 2});
        }
    }, [place])
    return <MapContainer 
        ref={mapRef}
        center={[32.7, -117.1]}
        zoom={12}
        scrollWheelZoom
        className="h-full"
        >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {place && <Marker position={[place.latitude, place.longitude]}  icon={greenIcon} />}
    </MapContainer>
}
