import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./pages/Home";
import Classes from "./pages/Classes";
import Stops from "./pages/Stops";
import Login from "./pages/Login";
import {AppBar, Button, IconButton, Toolbar, Typography} from "@material-ui/core";
import {Map as MapIcon} from "@material-ui/icons";


export default function App() {
  return (

      <Router>

        <AppBar position="static">
          <Toolbar variant="dense">
            <Link to="/" component={IconButton} edge="start" color="inherit" aria-label="menu">
              <MapIcon />
            </Link>
            <Typography variant="h6">
              UMap Amherst
            </Typography>
            <Link to="/" component={Button} color={'inherit'}>Home</Link>
            <Link to="/classes" component={Button} color={'inherit'}>Classes</Link>
            <Link to="/stops" component={Button} color={'inherit'}>Pitstops</Link>
            <Link to="/login" component={Button} color={'inherit'}>Login</Link>

          </Toolbar>
        </AppBar>


        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/classes" component={Classes} />
          <Route path="/stops" component={Stops} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
  );
}
