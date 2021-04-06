import React from "react";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import Button from '@material-ui/core/Button';

export default function Login() 
{
    return (
      <div className = "page">

          <div className = "title">
              UMap Amherst
          </div>

          <div className = "loginTitle">
              Login
          </div>

          <div className = "usernameField">
            <Grid className = "usernameIcon">
              <PersonIcon/>
            </Grid>
            <TextField label = "Username" variant = "outlined"/>
          </div>

          <div className = "passwordField">
            <Grid className = "passwordIcon">
              <LockIcon/>
            </Grid>
            <TextField label = "Password" variant = "outlined"/>
          </div>

          <div className = "loginButton">
            <Button variant="contained" href = "/">
              Login
            </Button>
          </div>

          <div className = "createAccount">
            <Button>
              Create Account 
            </Button>
          </div>

          <div className = "guest">
            <Button href = "/">
              Use as Guest
            </Button>
          </div>

      </div>
    );
}