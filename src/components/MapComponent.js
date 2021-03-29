import GoogleMapReact from 'google-map-react';
import React, {useEffect, useState} from 'react';


export default function MapComponent() {
    const mapStyle = require('../mapstyle.json');


    function mapResultToCoords(api_result) {
        let directions = [];
        api_result.routes[0].legs[0].steps.forEach((leg, idx) => {
            directions.push({lat: leg.start_location.lat, lng: leg.start_location.lng })
            directions.push({lat: leg.end_location.lat, lng: leg.end_location.lng })
        });
        return directions;
    }


    function handleLoadGoogleMapsAPI(map, maps) {

        let api_res = {
            "geocoded_waypoints": [
                {
                    "geocoder_status": "OK",
                    "place_id": "ChIJ3-y273PS5okRyNNBnId51eU",
                    "types": [
                        "premise"
                    ]
                },
                {
                    "geocoder_status": "OK",
                    "place_id": "ChIJqbpXyHDS5okRz_S73SlN3Vg",
                    "types": [
                        "premise"
                    ]
                }
            ],
            "routes": [
                {
                    "bounds": {
                        "northeast": {
                            "lat": 42.3913474,
                            "lng": -72.52621449999999
                        },
                        "southwest": {
                            "lat": 42.3878964,
                            "lng": -72.52742599999999
                        }
                    },
                    "copyrights": "Map data ©2021 Google",
                    "legs": [
                        {
                            "distance": {
                                "text": "0.3 mi",
                                "value": 428
                            },
                            "duration": {
                                "text": "5 mins",
                                "value": 300
                            },
                            "end_address": "Murray D. Lincoln Campus Center, 1 Campus Center Way, Amherst, MA 01003, USA",
                            "end_location": {
                                "lat": 42.3913474,
                                "lng": -72.5265107
                            },
                            "start_address": "Herter Hall, Amherst, MA 01002, USA",
                            "start_location": {
                                "lat": 42.3878964,
                                "lng": -72.52736899999999
                            },
                            "steps": [
                                {
                                    "distance": {
                                        "text": "0.2 mi",
                                        "value": 304
                                    },
                                    "duration": {
                                        "text": "3 mins",
                                        "value": 209
                                    },
                                    "end_location": {
                                        "lat": 42.3905485,
                                        "lng": -72.5267006
                                    },
                                    "html_instructions": "Head <b>north</b>",
                                    "polyline": {
                                        "points": "k{uaG`otyL_@JGGQK[QeAG{@Ge@GWAc@EaAMm@SEA[KeA["
                                    },
                                    "start_location": {
                                        "lat": 42.3878964,
                                        "lng": -72.52736899999999
                                    },
                                    "travel_mode": "WALKING"
                                },
                                {
                                    "distance": {
                                        "text": "135 ft",
                                        "value": 41
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 32
                                    },
                                    "end_location": {
                                        "lat": 42.3906333,
                                        "lng": -72.52621449999999
                                    },
                                    "html_instructions": "Turn <b>right</b>",
                                    "maneuver": "turn-right",
                                    "polyline": {
                                        "points": "}kvaGzjtyLGq@Go@"
                                    },
                                    "start_location": {
                                        "lat": 42.3905485,
                                        "lng": -72.5267006
                                    },
                                    "travel_mode": "WALKING"
                                },
                                {
                                    "distance": {
                                        "text": "272 ft",
                                        "value": 83
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 59
                                    },
                                    "end_location": {
                                        "lat": 42.3913474,
                                        "lng": -72.5265107
                                    },
                                    "html_instructions": "Turn <b>left</b><div style=\"font-size:0.9em\">Destination will be on the left</div>",
                                    "maneuver": "turn-left",
                                    "polyline": {
                                        "points": "mlvaGxgtyLSDaAZ_@LYJ"
                                    },
                                    "start_location": {
                                        "lat": 42.3906333,
                                        "lng": -72.52621449999999
                                    },
                                    "travel_mode": "WALKING"
                                }
                            ],
                            "traffic_speed_entry": [],
                            "via_waypoint": []
                        }
                    ],
                    "overview_polyline": {
                        "points": "k{uaG`otyL_@JGGm@]aCO}@IeBSs@UaBg@OaBuA`@y@X"
                    },
                    "summary": "",
                    "warnings": [
                        "Walking directions are in beta. Use caution – This route may be missing sidewalks or pedestrian paths."
                    ],
                    "waypoint_order": []
                }
            ],
            "status": "OK"
        };

        let directions = mapResultToCoords(api_res);

        const directionPath = new maps.Polyline({
            path: directions,
            geodesic: true,
            strokeColor: "#389C29",
            strokeOpacity: 1.0,
            strokeWeight: 3,
        });
        directionPath.setMap(map);
        // map.data.add({
        //     // geometry: new maps.Data.LineString([
        //     //     {"lat": 42.3878658, "lng": -72.5270293},
        //     //     {"lat": 42.3854799, "lng": -72.5258504},
        //     //     {"lat": 42.3925702, "lng": -72.5256119},
        //     //     {"lat": 42.391686, "lng": -72.52609099999999}
        //     // ])
        //     geometry: new maps.Data.Polyline([
        //         "qxvaG`dtyLPbBJp@FAFADCDEDCFEFCFADABA@?JCHAHALALAB?BABABC"
        //         ])
        // })
    }


    return (
        // Important! Always set the container height explicitly
            <GoogleMapReact
                defaultCenter={{lat: 42.389564, lng: -72.526512}}
                defaultZoom={16}
                onGoogleApiLoaded={({ map, maps }) => handleLoadGoogleMapsAPI(map, maps)}
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