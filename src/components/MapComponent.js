import GoogleMapReact from 'google-map-react';
import React from 'react';


export default function MapComponent() {
    const mapStyle = require('../mapstyle.json');
    return (
        // Important! Always set the container height explicitly
            <GoogleMapReact
                defaultCenter={{lat: 42.389564, lng: -72.526512}}
                defaultZoom={16}
                yesIWantToUseGoogleMapApiInternals
                bootstrapURLKeys={{key: "AIzaSyAz2oL1-IeVDxCY7lWV2ivTZ3LIpEkrWEE"}}
                options={{
                    disableDefaultUI: true, // disable default map UI
                    draggable: true, // make map draggable
                    keyboardShortcuts: false, // disable keyboard shortcuts
                    scaleControl: true, // allow scale control
                    scrollwheel: true, // allow scroll wheel
                    styles: mapStyle, // change default map styles
                    draggableCursor: 'grab',
                    draggingCursor: 'grabbing',
                }}
            >
            </GoogleMapReact>
    );
}