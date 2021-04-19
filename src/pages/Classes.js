import React, { useState, useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import InputBase from "@material-ui/core/InputBase";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import MapIcon from "@material-ui/icons/Map";

export default function Classes(props) {
  const classes = useStyles();

  useEffect(() => {
    async function fetchData() {
      // Loads available classes to select from SQL
      let availableClasses = await fetch(
        "https://cs326-umap-amherst.herokuapp.com/classOptions",
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        }
      ).then((res) => res.json());
      // Loads available buildings to select from SQL
      let availableBuildings = await fetch(
        "https://cs326-umap-amherst.herokuapp.com/buildings",
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        }
      ).then((res) => res.json());

      setState({
        ...state,
        loaded: true,
        availableClasses: availableClasses.results,
        availableBuildings: availableBuildings.results,
      });
    }
    if (state.loaded === false) {
      fetchData();
    }
  });

  const [state, setState] = useState({
    name: "",
    days: "",
    building: "",
    hour: "",
    minute: "",
    time: "",
    room: "001",
    classList: [],
    classSelectDOM: [],
    buildingSelectDOM: [],
    availableClasses: [],
    availableBuildings: [],
    keyVal: 0,
    loaded: false,
  });
  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  // Loading all selectable class that are available to add
  state.classSelectDOM = [];
  for (let i = 0; i < state.availableClasses.length; i++) {
    let selectClass = (
      <MenuItem value={state.availableClasses[i].name} key={state.keyVal++}>
        {state.availableClasses[i].name}
      </MenuItem>
    );
    state.classSelectDOM.push(selectClass);
  }
  // Loading all selectable buildings that are available to add
  state.buildingSelectDOM = [];
  for (let i = 0; i < state.availableBuildings.length; i++) {
    let selectBuilding = (
      <MenuItem value={state.availableBuildings[i].name} key={state.keyVal++}>
        {state.availableBuildings[i].name}
      </MenuItem>
    );
    state.buildingSelectDOM.push(selectBuilding);
  }

  let listDOM = []; // stores class list dom
  // Loading all of the classes
  for (let i = 0; i < state.classList.length; i++) {
    let classDOM = (
      <div className="classes-list-item" key={state.keyVal++}>
        <div>
          {state.classList[i].name}{" "}
          <span style={{ float: "right" }}>{state.classList[i].days}</span>
        </div>
        <div>
          {state.classList[i].building}{" "}
          <span style={{ float: "right" }}>{state.classList[i].time}</span>
        </div>
        <div>Room {state.classList[i].room}</div>
        <button
          className="classes-button"
          onClick={() => setState(removeClass(state, i))}
        >
          Remove
        </button>
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

  if (state.loaded === false) {
    return (
      <div>
        <div className="classes-dashboard">
          <span className="classes-title">Class Schedule</span>
          <div className="classes-list" id="classes-list">
            <div className="classes-list-item">
              <div>LOADING DATA...</div>
            </div>
          </div>
        </div>
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
              {state.classSelectDOM}
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
              {state.buildingSelectDOM}
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
          <div className="classes-add-error" id="classes-add-error">
            Please make sure that all items have been selected.
          </div>
        </div>
        <button
          className="classes-button"
          id="classes-create"
          onClick={() => setState(addClass(state))}
        >
          Add New Class
        </button>
        <Button variant="contained" endIcon={<MapIcon />} id="classes-save">
          Save Classes
        </Button>
        <a href="#/">
          <Button variant="contained" endIcon={<MapIcon />} id="classes-return">
            Return to Map
          </Button>
        </a>
      </div>
    </div>
  );
}

/**
 * Adds a class
 * @param state - current component state
 */
function addClass(state) {
  let validClass =
    state.name !== "" &&
    state.days !== "" &&
    state.building !== "" &&
    state.hour !== "" &&
    state.minute !== "" &&
    state.time !== "" &&
    state.room !== "room";

  if (!validClass) {
    document.getElementById("classes-add-error").style.display = "block";
    return state;
  } else {
    document.getElementById("classes-add-error").style.display = "none";
  }

  let newClass = {
    name: state.name,
    days: state.days,
    building: state.building,
    time: state.hour + ":" + state.minute + " " + state.time,
    room: state.room,
  };
  let newList = state.classList;
  newList.push(newClass);
  toggleAddMenu();

  return {
    ...state,
    classList: newList,
  };
}

/**
 * Removes a class
 * @param state - current component state
 * @param i - index in classList array to reomve
 */
function removeClass(state, i) {
  let newList = state.classList;
  newList.splice(i, 1);

  return {
    ...state,
    classList: newList,
  };
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
    document.getElementById("classes-add-error").style.display = "none";
  } else {
    document.getElementById("classes-list").style.display = "block";
    document.getElementById("classes-save").style.display = "flex";
    document.getElementById("classes-return").style.display = "flex";
    document.getElementById("classes-menu").style.display = "none";
    document.getElementById("classes-add").innerHTML = "Add Class";
    document.getElementById("classes-create").style.display = "none";
  }
}

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

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
