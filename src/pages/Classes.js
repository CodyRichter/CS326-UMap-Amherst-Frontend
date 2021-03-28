import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import InputBase from "@material-ui/core/InputBase";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Classes() {
  // Array of class objects to load from backend
  let list = [
    {
      name: "COMPSCI - 121",
      days: "Monday, Wednesday",
      building: "Thompson Hall",
      time: "11:15 AM to 12:05 PM",
      room: "104",
    },
    {
      name: "COMPSCI - 220",
      days: "Tuesday, Thursday",
      building: "ILC",
      time: "10:00 AM to 11:15 AM",
      room: "N 151",
    },
    {
      name: "COMPSCI - 311",
      days: "Friday, Saturday, Sunday",
      building: "Goessmann Lab",
      time: "2:50 AM to 3:11 PM",
      room: "20",
    },
  ];

  const classes = useStyles();
  const [classList, setClassList] = useState([]);
  const [state, setState] = useState({
    name: "",
    days: "",
    building: "",
    hour: "",
    minute: "",
    time: "",
    room: "001",
  });
  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  let listDOM = []; // stores class list dom
  // Loading all of the classes
  for (let i = 0; i < classList.length; i++) {
    let classDOM = (
      <div className="classes-list-item">
        <div>
          {classList[i].name}{" "}
          <span style={{ float: "right" }}>{classList[i].days}</span>
        </div>
        <div>
          {classList[i].building}{" "}
          <span style={{ float: "right" }}>{classList[i].time}</span>
        </div>
        <div>Room {classList[i].room}</div>
        <button className="classes-button">Remove</button>
      </div>
    );
    listDOM.push(classDOM);
  }

  // No classes loaded check
  if (listDOM.length === 0) {
    listDOM = (
      <div className="classes-list-item">
        <div>No classes scheduled :(</div>
      </div>
    );
  }

  return (
    <div>
      <div className="classes-dashboard">
        <div>
          <span className="classes-title">Class Schedule</span>
          <button
            className="classes-button"
            id="classes-add"
            onClick={toggleAddMenu}
          >
            Add Class
          </button>
        </div>
        <div className="classes-list" id="classes-list">
          {listDOM}
        </div>
        <div className="classes-menu" id="classes-menu">
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Class</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="classes-menu-name"
              value={state.name}
              name="name"
              onChange={handleChange}
            >
              <MenuItem value="CS 121">CS 121</MenuItem>
              <MenuItem value="CS 220">CS 220</MenuItem>
              <MenuItem value="CS 311">CS 311</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Days</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="classes-menu-days"
              value={state.days}
              name="days"
              onChange={handleChange}
            >
              <MenuItem value="Monday, Wednesday, Friday">
                Monday, Wednesday, Friday
              </MenuItem>
              <MenuItem value="Monday, Wednesday">Monday, Wednesday</MenuItem>
              <MenuItem value="Tuesday, Thursday">Tuesday, Thursday</MenuItem>
              <MenuItem value="Monday">Monday</MenuItem>
              <MenuItem value="Tuesday">Tuesday</MenuItem>
              <MenuItem value="Wednesday">Wednesday</MenuItem>
              <MenuItem value="Thursday">Thursday</MenuItem>
              <MenuItem value="Friday">Friday</MenuItem>
              <MenuItem value="Saturday">Saturday</MenuItem>
              <MenuItem value="Sunday">Sunday</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Building</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="classes-menu-building"
              value={state.building}
              name="building"
              onChange={handleChange}
            >
              <MenuItem value="Thompson Hall">Thompson Hall</MenuItem>
              <MenuItem value="ILC">ILC</MenuItem>
              <MenuItem value="Goessmann">Goessmann</MenuItem>
            </Select>
          </FormControl>
          <br />
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Hour</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="classes-menu-hour"
              value={state.hour}
              name="hour"
              onChange={handleChange}
            >
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5">5</MenuItem>
              <MenuItem value="6">6</MenuItem>
              <MenuItem value="7">7</MenuItem>
              <MenuItem value="8">8</MenuItem>
              <MenuItem value="9">9</MenuItem>
              <MenuItem value="10">10</MenuItem>
              <MenuItem value="11">11</MenuItem>
              <MenuItem value="12">12</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Minute</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="classes-menu-minute"
              value={state.minute}
              name="minute"
              onChange={handleChange}
            >
              <MenuItem value="00">00</MenuItem>
              <MenuItem value="05">05</MenuItem>
              <MenuItem value="10">10</MenuItem>
              <MenuItem value="15">15</MenuItem>
              <MenuItem value="20">20</MenuItem>
              <MenuItem value="25">25</MenuItem>
              <MenuItem value="30">30</MenuItem>
              <MenuItem value="35">35</MenuItem>
              <MenuItem value="40">40</MenuItem>
              <MenuItem value="45">45</MenuItem>
              <MenuItem value="50">50</MenuItem>
              <MenuItem value="55">55</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">AM/PM</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="classes-menu-time"
              value={state.time}
              name="time"
              onChange={handleChange}
            >
              <MenuItem value="AM">AM</MenuItem>
              <MenuItem value="PM">PM</MenuItem>
            </Select>
          </FormControl>
          <br />
          <br />
          <br />
          <FormControl className={classes.margin}>
            <InputLabel htmlFor="classes-menu-roomNum">Room</InputLabel>
            <BootstrapInput
              id="classes-menu-roomNum"
              value={state.room}
              name="room"
              onChange={handleChange}
            />
          </FormControl>
        </div>
        <button
          className="classes-button"
          id="classes-create"
          onClick={() =>
            addClass(
              state.name,
              state.days,
              state.building,
              state.hour,
              state.minute,
              state.time,
              state.room
            )
          }
        >
          Add New Class
        </button>
        <button className="classes-button" id="classes-save">
          Save Classes
        </button>
        <button className="classes-button" id="classes-return">
          Return to Map
        </button>
      </div>
    </div>
  );
}

function addClass(name, days, building, hour, minute, time, room) {
  console.log(name + days + building + hour + minute + time + room);
}

/**
 *  Toggles Adding New Class Menu
 */
function toggleAddMenu() {
  if (document.getElementById("classes-list").style.display !== "none") {
    document.getElementById("classes-list").style.display = "none";
    document.getElementById("classes-save").style.display = "none";
    document.getElementById("classes-return").style.display = "none";
    document.getElementById("classes-add").innerHTML = "Go Back";
    document.getElementById("classes-menu").style.display = "block";
    document.getElementById("classes-create").style.display = "block";
  } else {
    document.getElementById("classes-list").style.display = "block";
    document.getElementById("classes-save").style.display = "block";
    document.getElementById("classes-return").style.display = "block";
    document.getElementById("classes-menu").style.display = "none";
    document.getElementById("classes-add").innerHTML = "Add Class";
    document.getElementById("classes-create").style.display = "none";
  }
}

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);
