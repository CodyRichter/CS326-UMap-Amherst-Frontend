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
import {AppBar, Grid, IconButton, Toolbar, Typography} from "@material-ui/core";
import {Map as MapIcon, } from "@material-ui/icons";

function homePageComponent() {
  return (
      <Grid item xs={10} className={'innerPage'}>
        <Home />
      </Grid>
  )
}

function classesPageComponent() {
  return (
      <Grid item xs={8} className={'innerPage'}>
        <Classes />
      </Grid>
  )
}

function stopsPageComponent() {
  return (
      <Grid item xs={8} className={'innerPage'}>
        <Stops />
      </Grid>
  )
}

function loginPageComponent() {
  return (
      <Grid item xs={4} className={'innerPage'}>
        <Login />
      </Grid>
  )
}



export default function App() {
  return (

      <HashRouter basename={'/'}>

        <AppBar position="sticky">
          <Toolbar variant="dense">
            <Link to="/" edge="start">
              <IconButton>
                <MapIcon />
              </IconButton>
            </Link>
            <Typography variant="h6">
              UMap Amherst
            </Typography>
          </Toolbar>
        </AppBar>

        <Grid container direction="row" justifyContent="center" alignItems="center" className={'pageContainer'}>
          <Switch>
              <Route path="/" exact component={homePageComponent} />
              <Route path="/classes" component={classesPageComponent} />
              <Route path="/stops" component={stopsPageComponent} />
              <Route path="/login" component={loginPageComponent} />
          </Switch>
        </Grid>

      </HashRouter>
  );
}
