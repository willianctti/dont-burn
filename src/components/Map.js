import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './Marker'
import LocationInfoBox from './LocationInfoBox'

const NATURAL_EVENT_WILDFIRE = 8;

const Map = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null)

    const renderMarkers = (map, maps) => {
        eventData.forEach((ev) => {
            if (ev.categories[0].id === NATURAL_EVENT_WILDFIRE) {
                const marker = new maps.Marker({
                    position: {
                        lat: ev.geometries[0].coordinates[1],
                        lng: ev.geometries[0].coordinates[0]
                    },
                    map,
                    title: ev.title
                });

                marker.addListener('click', () => {
                    setLocationInfo({ id: ev.id, title: ev.title })
                });
            }
        });
    }

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBqRJEqahJWQT73fU7-KQ0uEagTsv3ozl0' }}
                defaultCenter={center}
                defaultZoom={zoom}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
            >
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: -23.5505,
        lng: -46.6333
    },
    zoom: 6
}

export default Map