import React from "react";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import TextField from "@material-ui/core/TextField";
import {DataGrid} from "@material-ui/data-grid";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import MapIcon from '@material-ui/icons/Map';
import SaveIcon from '@material-ui/icons/Save';
import KeyboardTimePicker from '@material-ui/lab/DateTimePicker';
import {CardContent, Typography} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import makeStyles from "@material-ui/core/styles/makeStyles";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import axios from 'axios'

export default class Stops extends React.Component {



    constructor(props) {
        super(props);

        this.state = {
            search:"",
            columns:
                [
                {
                    field: 'location',
                    headerName: 'Location',
                    description: 'This column has the location of pit stops',
                    sortable: true,
                    width: 300
                },
                {
                    field: 'time',
                    headerName: 'Time',
                    description: 'This column has the time selector',
                    sortable: false,
                    width: 300,
                    renderCell: (params) => (
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <KeyboardTimePicker
                                renderInput={(params) => <TextField {...params} helperText={null}/>}
                                inputFormat="EEEE - hh:mm a"
                                openTo={"date"}
                                value={this.state.rows[params.row.id].time}
                                disabled={!this.state.rows[params.row.id].selected}
                                onChange={(newValue) => {
                                    let rs = this.state.rows;
                                    rs[params.row.id].time = newValue;
                                    this.setState({rows: rs});

                                }}
                            />
                        </LocalizationProvider>
                    )
                }
                ],
            rows: [
                { id: 0, location: 'Worcester Dining Commons', time: new Date(), selected: false},
                { id: 1, location: 'Franklin Dining Commons', time: new Date(), selected: false},
                { id: 2, location: 'Hampshire Dining Commons', time: new Date(), selected: false},
                { id: 3, location: 'Berkshire Dining Commons', time: new Date(), selected: false},
                { id: 4, location: 'Blue Wall', time: new Date(), selected: false},
                { id: 5, location: 'Procrastination Station', time: new Date(), selected: false},
                { id: 6, location: 'Roots Cafe', time: new Date(), selected: false},
                { id: 7, location: 'Campus Center', time: new Date(), selected: false},
                { id: 8, location: 'W.E.B. Du Bois Library', time: new Date(), selected: false}
            ],
            selected: []
        };
        this.searchFilter = this.searchFilter.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.getData = this.getData.bind(this);
        this.saveData = this.saveData.bind(this);

    }

    componentDidMount() {
        this.getData();
    }


    getData = async () => {
        // Once backend is hooked up
        // Retrieve user selected data and fill this.state.rows
        let userJSON = JSON.parse(localStorage.getItem("user"));
        let user = (await axios.get('https://cs326-umap-amherst.herokuapp.com/userid',{params:{email:userJSON[0].email, password:userJSON[0].password}})).data.results[0].id;

        localStorage.setItem("userid", user);
        console.log("ID", user);

        let pitstops = await axios.get('https://cs326-umap-amherst.herokuapp.com/pitstops');
        let selectedStops = await axios.get('https://cs326-umap-amherst.herokuapp.com/userpitstops',{params:{userID:user}});

        let data = pitstops.data;
        let selectedRows = selectedStops.data.results;

        let selectedRowIds = selectedStops.data.results.map(a => {
            return a["stopid"];
        });
        let newRows = data.results.map(a => {
            a["time"] = new Date();
            a["selected"] = selectedRows.filter(b => {
                return b["stopid"] === a["id"];
            }).length !== 0;
            if (a["selected"] === true) {
                a["time"] = new Date(selectedRows.filter(b => {
                    return b["stopid"] === a["id"];
                })[0]["stoptime"]);
            }
            return a;
        });
        this.setState({rows: newRows, selected: selectedRowIds});

    };


    saveData() {
        // Once the backend is hooked up
        // Send this.state.selected to it for database storage

        axios.post('https://cs326-umap-amherst.herokuapp.com/savepitstops', {
            userID: localStorage.getItem("userid"),
            rows: this.state.rows.filter(a => {
                return a["selected"] === true
            })
        })
        .then(function (response) {
            console.log(response);
        })
            .catch(function (error) {
                console.log(error);
            });

    }

    handleChange (event) {
        this.setState({search:event.target.value});
    };

    searchFilter(row) {
        let stringSearch = this.state.search.trim() === "" || row.location.toLowerCase().includes(this.state.search.toLowerCase());
        let options = { weekday: 'long', hour: 'numeric', minute: 'numeric' };
        let timeSearch = row.selected && row.time.toLocaleDateString("en-US", options).toLowerCase().includes(this.state.search.toLowerCase());
        return stringSearch || timeSearch;
    }



    render() {



        const classes = makeStyles((theme) => ({
            margin: {
                margin: theme.spacing(1),
            },
        }));

        return (
            <div>

                <Grid container direction="row" justifyContent="center" alignItems="center" spacing={3}>

                    <Grid item xs={12}>
                        <Typography variant={'h4'}>Schedule Pit Stops</Typography>
                    </Grid>

                    <Grid item xs={12}>

                        <Card>
                            <CardContent>
                                <div className={classes.margin}>
                                    <Grid container spacing={1} alignItems="flex-end">

                                        <Grid item>
                                            <FormControl variant="filled">
                                                <InputLabel htmlFor="component-filled">Search</InputLabel>
                                                <FilledInput id="component-filled" value={this.state.search} onChange={this.handleChange} />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                </div>
                                <DataGrid autoHeight disableColumnFilter={true} density="headerHeight" rows={this.state.rows.filter(this.searchFilter)} columns={this.state.columns.map((column) => ({
                                    ...column,
                                    disableClickEventBubbling: true,
                                }))} pageSize={5}
                                          checkboxSelection
                                          selectionModel={this.state.selected}
                                          onRowSelected={(params) => {
                                              let rs = this.state.rows;
                                              rs[params.data.id].selected = params.isSelected;
                                              this.setState({rows: rs});
                                          }}

                                />
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12}>
                        <Grid container direction="row" justifyContent="flex-end" alignItems="center">
                            <Grid item xs={12} style={{textAlign: "right"}}>
                                <Link to="/" style={{textDecoration:"none"}}>
                                    <Button variant="contained" endIcon={<MapIcon />}>
                                        Return to Map
                                    </Button>
                                </Link>

                                    <Button variant="contained" endIcon={<SaveIcon />} onClick={this.saveData}>
                                        Save Pit Stops
                                    </Button>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </div>
        );
    }
}
