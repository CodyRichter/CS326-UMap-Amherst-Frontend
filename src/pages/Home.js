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
            classname: 'Today',
            time: 'No Upcoming Classes',
            buildingname: '',
            room: '',
        }
    ]);

    let [pitstops, setPitstops] = useState([
        {
            time: '',
            location: 'No Pitstops'
        }
    ]);

    let [timeUntilNextClass, setTimeUntilNextClass] = useState('No more classes today.');

    let [route, setRoute] = useState(null);

    useEffect(() => {
        let userData = localStorage.getItem('user') && localStorage.getItem('user')[0] ? JSON.parse(localStorage.getItem('user'))[0] : {};
        let userID = userData ? userData.id : -1;
        if (userID !== -1 && userID !== undefined) {
            axios.request({
                method: 'get',
                url: 'https://cs326-umap-amherst.herokuapp.com/home?userID=' + userID
            }).then((res) => {
                setUpcomingClasses(res.data['classes']);
                setPitstops(res.data['stops']);
                setTimeUntilNextClass(res.data['timeUntilNextClass']);
                setRoute(res.data['route']);
            }).catch((err) => {
                console.log('Unable to connect to backend to load data.')
            });
        } else {
            console.log('No user found. Current user data' + localStorage.getItem('user'))
        }

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
                                <Typography variant={'h6'}>Account Information</Typography>

                                <Grid container direction="row" justify="flex-start" alignItems="center">
                                    <Grid item xs={2}>
                                        <Person fontSize={'large'} />
                                    </Grid>
                                    <Grid item xs={10}>
                                        {localStorage.getItem('user') && localStorage.getItem('user')[0] ?
                                            <Typography variant={'body1'}>{JSON.parse(localStorage.getItem('user'))[0].email}</Typography>
                                            :
                                            <Typography variant={'body1'}>Not Logged In.</Typography>
                                        }

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
