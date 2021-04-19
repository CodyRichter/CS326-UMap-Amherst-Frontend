import GoogleMapReact from 'google-map-react';
import React, {useEffect, useState} from 'react';


export default function MapComponent(props) {
    const mapStyle = require('../mapstyle.json');

    let [map, setMap] = useState(null);
    let [maps, setMaps] = useState(null);

    useEffect( () => {
        handleLoadGoogleMapsAPI(map, maps);
    }, [props.route]);

    function mapResultToCoords(api_result) {
        let directions = [];
        api_result.routes[0].legs[0].steps.forEach((leg, idx) => {
            directions.push({lat: leg.start_location.lat, lng: leg.start_location.lng})
            directions.push({lat: leg.end_location.lat, lng: leg.end_location.lng})
        });
        return directions;
    }

    function handleLoadGoogleMapsAPI() {
        if (map && maps && props.route) {

            if (!props.route) {
                return;
            }

            let directions = mapResultToCoords(props.route);

            const directionPath = new maps.Polyline({
                path: directions,
                geodesic: true,
                strokeColor: "#389C29",
                strokeOpacity: 1.0,
                strokeWeight: 3,
            });
            directionPath.setMap(map);
        }
    }


    return (
        // Important! Always set the container height explicitly
        <GoogleMapReact
            defaultCenter={{lat: 42.389564, lng: -72.526512}}
            defaultZoom={16}
            onGoogleApiLoaded={({map, maps}) => {setMap(map); setMaps(maps);}}
            yesIWantToUseGoogleMapApiInternals
            bootstrapURLKeys={{key: "AIzaSyAz2oL1-IeVDxCY7lWV2ivTZ3LIpEkrWEE"}}
            options={{
                disableDefaultUI: true, // disable default map UI
                draggable: true, // make map draggable
                keyboardShortcuts: false, // disable keyboard shortcuts
                scaleControl: true, // allow scale control
                styles: mapStyle, // change default map styles
                draggableCursor: 'grab',
                draggingCursor: 'grabbing',
            }}
        >
        </GoogleMapReact>
    );
}