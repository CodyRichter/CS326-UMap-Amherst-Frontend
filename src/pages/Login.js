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
import axios from 'axios';

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

    const [field, setField] = useState
    ({
        id: "",
        firstName: "",
        lastName: "",
        major: "",
        emailAddress: "",
        password: "",
        users: []
    });

    const isEmpty = (fieldValue) =>
    {
      if (fieldValue === "") 
      {
        return true;
      }
      else if (fieldValue !== "")
      {
        return false;
      }
    }

    const handleChange = (event) =>
    {
      const fieldName = event.target.name;
      const fieldValue = event.target.value;

      setField
      (
        { 
          [fieldName]: fieldValue
        }
      );
    };

    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const login = () => 
    {
      axios.post('https://cs326-umap-amherst.herokuapp.com/saveusers', 
      {
        firstName: loginUsername,
        lastName: loginPassword
      })
      .then(function (response) 
      {
        console.log(response);
      })
      .catch(function (error) 
      {
        console.log(error);
      });
    };

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
            <TextField label = "Username" variant = "outlined" onChange = {event => setLoginUsername(event.target.value)}/>
          </div>

          <div className = "passwordField">
            <Grid className = "passwordIcon">
              <LockIcon/>
            </Grid>
            <TextField label = "Password" variant = "outlined" onChange = {event => setLoginPassword(event.target.value)}/>
          </div>

          <div className = "loginButton">
            <Link to = "/" className = "loginLink">
              <Button variant = "contained" onClick = {login}>
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
                  Please fill in at least one field.
                </DialogContentText>
                  <TextField label = "First Name" variant = "outlined" margin = "dense" error = {isEmpty(Object.values(field)[0])} onChange = {handleChange} fullWidth/>
                  <TextField label = "Last Name" variant = "outlined" margin = "dense" error = {isEmpty(Object.values(field)[0])} onChange = {handleChange} fullWidth/>
                  <TextField label = "Major" variant = "outlined" margin = "dense" error = {isEmpty(Object.values(field)[0])} onChange = {handleChange} fullWidth/>
                  <TextField label = "Email Address" variant = "outlined" margin = "dense" error = {isEmpty(Object.values(field)[0])} onChange = {handleChange} fullWidth/>
                  <TextField label = "Password" variant = "outlined" margin = "dense" error = {isEmpty(Object.values(field)[0])} onChange = {handleChange} fullWidth/>
              </DialogContent>
              <DialogActions>
                <Button onClick = {closeForm}>
                  Close
                </Button>
                <Button onClick = {() => setField(addLogin(field))}>
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

function addLogin(state)
{
  let validLogin = state.id !== "" && state.firstName !== "" && state.lastName !== "" && state.major !== "" && state.emailAddress !== "" && state.password !== "";

  if (validLogin === false)
  {
    console.log("Invalid login");
  }
  else if (validLogin === true)
  {
    console.log("Valid login");
  }

  let newUser = 
  {
    id: state.id,
    firstName: state.firstName,
    lastName: state.lastName,
    major: state.major,
    emailAddress: state.emailAddress,
    password: state.password
  };

  let userList = state.users;

  userList.push(newUser);

  return {
    ...state,
    userList: newUser
  };
}