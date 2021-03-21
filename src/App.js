import React from "react";
import {
  HashRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./pages/Home";
import Classes from "./pages/Classes";
import Stops from "./pages/Stops";
import Login from "./pages/Login";
import {AppBar, Button, Grid, IconButton, Toolbar, Typography} from "@material-ui/core";
import {Map as MapIcon, } from "@material-ui/icons";


export default function App() {
  return (

      <HashRouter basename={'/'}>

        <AppBar position="sticky">
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
          <Grid container direction="row" justify="center" alignItems="center" className={'pageContainer'}>
            <Route path="/" exact>
              <Grid item xs={10} className={'innerPage'}>
                <Home />
              </Grid>
            </Route>
            <Route path="/classes">
              <Grid item xs={8} className={'innerPage'}>
                <Classes />
              </Grid>
            </Route>
            <Route path="/stops" exact>
              <Grid item xs={8} className={'innerPage'}>
                <Stops />
              </Grid>
            </Route>
            <Route path="/login">
              <Grid item xs={4} className={'innerPage'}>
                <Login />
              </Grid>
            </Route>

          </Grid>

        </Switch>

      </HashRouter>
  );
}
