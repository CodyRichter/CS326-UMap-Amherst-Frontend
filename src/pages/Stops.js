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


export default class Stops extends React.Component {

    constructor(props) {
        super(props);

        this.getData();

        this.state = {
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
            ]
        }
    }

    getData() {
        // Once backend is hooked up
        // Retrieve user selected data and fill this.state.rows
    }


    saveData() {
        // Once the backend is hooked up
        // Send this.state.selected to it for database storage
    }

    render() {
        return (
            <div>
                <Grid container direction="row" justifyContent="center" alignItems="center" spacing={3}>

                    <Grid item xs={12}>
                        <Typography variant={'h4'}>Schedule Pit Stops</Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Card>
                            <CardContent>
                                <DataGrid autoHeight density="headerHeight" rows={this.state.rows} columns={this.state.columns.map((column) => ({
                                    ...column,
                                    disableClickEventBubbling: true,
                                }))} pageSize={5}
                                          checkboxSelection
                                          onRowSelected={(params) => {
                                              let rs = this.state.rows;
                                              rs[params.data.id].selected = params.isSelected;
                                              this.setState({rows: rs});
                                          }}/>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12}>
                        <Grid container direction="row" justifyContent="flex-end" alignItems="center">
                            <Grid item xs={12} style={{textAlign: "right"}}>
                                <Link to="/">
                                    <Button variant="contained" endIcon={<MapIcon />}>
                                        Return to Map
                                    </Button>
                                </Link>
                                &nbsp;
                                <Link to="/">
                                    <Button variant="contained" endIcon={<SaveIcon />} onClick={this.saveData()}>
                                        Save Pit Stops
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </div>
        );
    }
}
