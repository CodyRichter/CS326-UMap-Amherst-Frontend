import React, {useState} from "react";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import {Link} from "react-router-dom";


export default function Login() 
{
    const [open, isOpen] = useState(false);

    const openForm = () => 
    {
      isOpen(true);
    };

    const closeForm = () =>
    {
      isOpen(false);
    }

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
            <Link to = "/" className = "loginLink">
              <Button variant = "contained">
                Login
              </Button>
            </Link>
          </div>

          <div className = "createAccount">
            <Button onClick = {openForm}>
              Create Account 
            </Button>
            <Dialog open = {open} className = "form">  
              <DialogTitle className = "formTitle"> Create Account </DialogTitle>
                <Grid className = "contactIcon">
                  <AccountBoxIcon style = {{fontSize: 45}}/>
                </Grid>
              <DialogContent>
                <DialogContentText className = "formHeader">
                  Please fill in your first and last name, major, email address, and password.
                </DialogContentText>
                  <TextField label = "First Name" variant = "outlined" margin = "dense" fullWidth/>
                  <TextField label = "Last Name" variant = "outlined" margin = "dense" fullWidth/>
                  <TextField label = "Major" variant = "outlined" margin = "dense" fullWidth/>
                  <TextField label = "Email Address" variant = "outlined" margin = "dense" fullWidth/>
                  <TextField label = "Password" variant = "outlined" margin = "dense" fullWidth/>
              </DialogContent>
              <DialogActions>
                <Button onClick = {closeForm}>
                  Close
                </Button>
                <Button onClick = {closeForm}>
                  Sign Up
                </Button>
              </DialogActions>
            </Dialog>
          </div>

          <div className = "guest">
            <Link to = "/" className = "guestLink">
              <Button>
                Use as Guest
              </Button>
            </Link>
          </div>

      </div>
    );
}