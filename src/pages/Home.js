import React, {useEffect, useState} from "react";
import {CardContent, Grid, Typography} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import {Edit, Person} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import MapComponent from "../components/MapComponent";
import {Link} from "react-router-dom";
import axios from 'axios';


export default function Home() {

    let [upcomingClasses, setUpcomingClasses] = useState([
        {
            classname: 'Compsci 121',
            time: '11:15 AM',
            buildingname: 'ILC',
            room: 'N151',
        }
    ]);

    let [pitstops, setPitstops] = useState([
        {
            time: '12:05PM',
            location: 'Blue Wall'
        }
    ]);

    let [timeUntilNextClass, setTimeUntilNextClass] = useState('No more classes today.');

    let [route, setRoute] = useState(null);

    useEffect(() => {
        axios.request({
            method: 'get',
            url: 'http://cs326-umap-amherst.herokuapp.com/home?userID=0'
        }).then((res) => {
            setUpcomingClasses(res.data['classes']);
            setPitstops(res.data['stops']);
            setTimeUntilNextClass(res.data['timeUntilNextClass']);
            setRoute(res.data['route']);
        }).catch((err) => {
            console.log('Unable to connect to backend to load data.')
        });
    }, [])

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
                                {upcomingClasses.length === 0 &&
                                    <Typography variant={'body1'}>No more classes today.</Typography>
                                }
                                {upcomingClasses.map((classInfo, idx) =>
                                    <Typography key={idx} variant={'body1'}>{classInfo.classname}: {classInfo.buildingname} {classInfo.room}  <b>{classInfo.time}</b></Typography>
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
                                {pitstops.length === 0 &&
                                <Typography variant={'body1'}>No more pitstops today.</Typography>
                                }
                                {pitstops.map((stop, idx) =>
                                    <Typography key={idx} variant={'body1'}>{stop.location}  <b>{stop.time}</b></Typography>
                                )}
                            </CardContent>
                        </Card>
                    </Grid>

                    {/*Class Info*/}
                    <Grid item xs={12}>
                        <Card>
                            <CardContent>
                                <Typography variant={'h6'}>Time Until Next Class</Typography>
                                <Typography variant={'body1'}>{timeUntilNextClass}</Typography>

                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>
            </Grid>


            {/*Map*/}
            <Grid item xs={8} className={'mapContainer'}>
                <MapComponent route={route} />
            </Grid>

        </Grid>
    );
}
