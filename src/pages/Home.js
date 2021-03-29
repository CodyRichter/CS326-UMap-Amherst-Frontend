import React, {useState} from "react";
import {CardContent, Grid, Typography} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import {Edit, Person} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import MapComponent from "../components/MapComponent";
import {Link} from "react-router-dom";


export default function Home() {

    let [upcomingClasses, setUpcomingClasses] = useState([
        {
            name: 'Compsci 121',
            startTime: '11:15 AM',
            endTime: '12:05 PM',
            location: 'ILC 151'
        },
        {
            name: 'History 115',
            startTime: '12:20 PM',
            endTime: '1:10 PM',
            location: 'Herter 212'
        }
    ]);

    let [pitstops, setPitstops] = useState([
        {
            name: 'Lunch at Blue Wall',
            startTime: '1:30 PM',
            endTime: '2:30 PM',
            location: 'ILC 151'
        },
        {
            name: 'Study at Library',
            startTime: '4:00 PM',
            endTime: '6:00 PM',
            location: 'W.E.B. Du Bois Library'
        }
    ]);

    function showDirectionsOnMap() {

        // let startPos = [42.387781, -72.527347];  // Herter hall
        // let endPos = [42.391327, -72.526965];  // Campus center

        // TODO: Make call to server and get directions

        // This is what the API will normally return
        let api_call_result = {
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
                            "lat": 42.3925702,
                            "lng": -72.52233369999999
                        },
                        "southwest": {
                            "lat": 42.3852591,
                            "lng": -72.5270293
                        }
                    },
                    "copyrights": "Map data ©2021",
                    "legs": [
                        {
                            "distance": {
                                "text": "1.0 mi",
                                "value": 1582
                            },
                            "duration": {
                                "text": "5 mins",
                                "value": 273
                            },
                            "end_address": "Murray D. Lincoln Campus Center, 1 Campus Center Way, Amherst, MA 01003, USA",
                            "end_location": {
                                "lat": 42.391686,
                                "lng": -72.52609099999999
                            },
                            "start_address": "Herter Hall, Amherst, MA 01002, USA",
                            "start_location": {
                                "lat": 42.3878658,
                                "lng": -72.5270293
                            },
                            "steps": [
                                {
                                    "distance": {
                                        "text": "397 ft",
                                        "value": 121
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 23
                                    },
                                    "end_location": {
                                        "lat": 42.3870385,
                                        "lng": -72.52641
                                    },
                                    "html_instructions": "Head <b>south</b> toward <b>Presidents Dr</b>",
                                    "polyline": {
                                        "points": "e{uaG|ltyLd@Q~Ai@VIBADAB?CWAY"
                                    },
                                    "start_location": {
                                        "lat": 42.3878658,
                                        "lng": -72.5270293
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.1 mi",
                                        "value": 179
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 76
                                    },
                                    "end_location": {
                                        "lat": 42.3854799,
                                        "lng": -72.5258504
                                    },
                                    "html_instructions": "Turn <b>right</b> onto <b>Presidents Dr</b>",
                                    "maneuver": "turn-right",
                                    "polyline": {
                                        "points": "_vuaG`ityLD?lA]XGbAUl@QnA]FC"
                                    },
                                    "start_location": {
                                        "lat": 42.3870385,
                                        "lng": -72.52641
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.2 mi",
                                        "value": 292
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 40
                                    },
                                    "end_location": {
                                        "lat": 42.3858297,
                                        "lng": -72.52262829999999
                                    },
                                    "html_instructions": "Turn <b>left</b> onto <b>Massachusetts Ave</b>",
                                    "maneuver": "turn-left",
                                    "polyline": {
                                        "points": "gluaGpetyLj@Sa@wCCOS}AIm@OoACQEYGa@G]CQ?CASAS?Q?Q@G?G@M"
                                    },
                                    "start_location": {
                                        "lat": 42.3854799,
                                        "lng": -72.5258504
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.5 mi",
                                        "value": 841
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 79
                                    },
                                    "end_location": {
                                        "lat": 42.3925702,
                                        "lng": -72.5256119
                                    },
                                    "html_instructions": "Turn <b>left</b> onto <b>N Pleasant St</b>",
                                    "maneuver": "turn-left",
                                    "polyline": {
                                        "points": "mnuaGlqsyL@IBK@E[IQCw@OQAI?C?G?KBMFA?KFQPa@d@a@f@IJKPSZ}@tAA@KPKPCB]^URIHm@`@GDSJ[NoAb@[LmA^A?EBQDE@u@L_D\\eALK@C?cCZMBqAVk@L"
                                    },
                                    "start_location": {
                                        "lat": 42.3858297,
                                        "lng": -72.52262829999999
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "489 ft",
                                        "value": 149
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 55
                                    },
                                    "end_location": {
                                        "lat": 42.391686,
                                        "lng": -72.52609099999999
                                    },
                                    "html_instructions": "Turn <b>left</b><div style=\"font-size:0.9em\">Destination will be on the right</div>",
                                    "maneuver": "turn-left",
                                    "polyline": {
                                        "points": "qxvaG`dtyLPbBJp@FAFADCDEDCFEFCFADABA@?JCHAHALALAB?BABABC"
                                    },
                                    "start_location": {
                                        "lat": 42.3925702,
                                        "lng": -72.5256119
                                    },
                                    "travel_mode": "DRIVING"
                                }
                            ],
                            "traffic_speed_entry": [],
                            "via_waypoint": []
                        }
                    ],
                    "overview_polyline": {
                        "points": "e{uaG|ltyL`DgAHAEq@pD{@|Bo@r@WcAsHa@}CMgA?_AFk@@E[IiASg@AYJMF_BjB_BdCWb@a@b@_@\\u@f@o@ZkBp@gBh@{@NeFj@aD`@}Bd@\\tCZM\\OVGz@KBC"
                    },
                    "summary": "N Pleasant St",
                    "warnings": [],
                    "waypoint_order": []
                }
            ],
            "status": "OK"
        }
    }

    return (
        <Grid container spacing={3}>

            {/*Sidebar*/}
            <Grid item xs={4}>
                <Grid container spacing={2}>

                    {/*Student Information*/}
                    <Grid item xs={12}>
                        <Card>
                            <CardContent>
                                <Typography variant={'h6'}>Student Information</Typography>

                                <Grid container direction="row" justify="flex-start" alignItems="center">
                                    <Grid item xs={2}>
                                        <Person fontSize={'large'} />
                                    </Grid>
                                    <Grid item xs={10}>
                                        <Typography variant={'body1'}>John Doe</Typography>
                                        <Typography variant={'subtitle1'}>Computer Science</Typography>
                                    </Grid>
                                </Grid>

                            </CardContent>
                        </Card>
                    </Grid>

                    {/*Upcoming Classes*/}
                    <Grid item xs={12}>
                        <Card>
                            <CardContent>

                                <Grid container direction="row" justifyContent="space-between" alignItems="center">
                                    <Grid item>
                                        <Typography variant={'h6'}>Upcoming Classes</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Link to="/classes">
                                            <IconButton size="small" variant="outlined">
                                                <Edit />
                                            </IconButton>
                                        </Link>
                                    </Grid>
                                </Grid>
                                {upcomingClasses.map((classInfo, idx) =>
                                    <Typography key={idx} variant={'body1'}>{classInfo.name} {classInfo.startTime}</Typography>
                                )}
                            </CardContent>
                        </Card>
                    </Grid>

                    {/*Pit stops*/}
                    <Grid item xs={12}>
                        <Card>
                            <CardContent>

                                <Grid container direction="row" justifyContent="space-between" alignItems="center">
                                    <Grid item>
                                        <Typography variant={'h6'}>Scheduled Pit Stops</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Link to="/stops">
                                            <IconButton size="small" variant="outlined">
                                                <Edit />
                                            </IconButton>
                                        </Link>
                                    </Grid>
                                </Grid>
                                {pitstops.map((stop, idx) =>
                                    <Typography key={idx} variant={'body1'}>{stop.name} {stop.startTime}</Typography>
                                )}
                            </CardContent>
                        </Card>
                    </Grid>

                    {/*Class Info*/}
                    <Grid item xs={12}>
                        <Card>
                            <CardContent>
                                <Typography variant={'h6'}>Time Until Next Class</Typography>
                                <Typography variant={'body1'}>10 Minutes</Typography>

                                <br />

                                <Typography variant={'h6'}>Travel Time to Next Class</Typography>
                                <Typography variant={'body1'}>6 Minutes</Typography>

                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>
            </Grid>


            {/*Map*/}
            <Grid item xs={8} className={'mapContainer'}>
                <MapComponent />
            </Grid>

        </Grid>
    );
}
