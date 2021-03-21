import React, {useState} from "react";
import {CardContent, Grid, Toolbar, Typography} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import {Edit, Map as MapIcon, Person} from "@material-ui/icons";
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
                                        <Link to="/classes" component={IconButton} size="small" variant="outlined">
                                            <Edit />
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
                                        <Link to="/stops" component={IconButton} size="small" variant="outlined">
                                            <Edit />
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
