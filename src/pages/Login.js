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

    const [id, setId] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [major, setMajor] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const login = () => 
    {
      axios.post('https://cs326-umap-amherst.herokuapp.com/savelogin', 
      {
        email: loginEmail,
        password: loginPassword
      })
      .then(function (response) 
      {
        const loginUser = 
        [{
          email: loginEmail,
          id: response.data.id
        }];

        console.log(response);
        localStorage.setItem("user", JSON.stringify(loginUser));
      })
      .catch(function (error) 
      {
        console.log(error);
      });
    };

    const signup = () =>
    {
      axios.post('https://cs326-umap-amherst.herokuapp.com/savesignup', 
      {
        id: id,
        firstName: firstName,
        lastName: lastName,
        major: major,
        emailAddress: emailAddress,
        password: password
      })
      .then(function (response) 
      {
        console.log(response);
      })
      .catch(function (error) 
      {
        console.log(error);
      });

      closeForm();
    };

    return (
      <div className = "page">

          <div className = "title">
              UMap Amherst
          </div>

          <div className = "loginTitle">
              Login
          </div>

          <div className = "emailField">
            <Grid className = "emailIcon">
              <PersonIcon/>
            </Grid>
            <TextField label = "Email Address" variant = "outlined" error = {loginEmail === ""} onChange = {event => setLoginEmail(event.target.value)}/>
          </div>

          <div className = "passwordField">
            <Grid className = "passwordIcon">
              <LockIcon/>
            </Grid>
            <TextField label = "Password" type = "Password" variant = "outlined" error = {loginPassword === ""} onChange = {event => setLoginPassword(event.target.value)}/>
          </div>

          <div className = "loginButton">
            <Button variant = "contained" onClick = {login} disabled = {loginEmail === "" || loginPassword === ""} href = "/">
                Login
            </Button>
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
                  Please fill in each of the fields below.
                </DialogContentText>
                  <TextField label = "ID" variant = "outlined" margin = "dense" error = {id === ""} onChange = {event => setId(event.target.value)} fullWidth/>
                  <TextField label = "First Name" variant = "outlined" margin = "dense" error = {firstName === ""}  onChange = {event => setFirstName(event.target.value)} fullWidth/>
                  <TextField label = "Last Name" variant = "outlined" margin = "dense" error = {lastName === ""} onChange = {event => setLastName(event.target.value)} fullWidth/>
                  <TextField label = "Major" variant = "outlined" margin = "dense" error = {major === ""} onChange = {event => setMajor(event.target.value)} fullWidth/>
                  <TextField label = "Email Address" variant = "outlined" margin = "dense" error = {emailAddress === ""} onChange = {event => setEmailAddress(event.target.value)} fullWidth/>
                  <TextField label = "Password" type = "Password" variant = "outlined" margin = "dense" error = {password === ""} onChange = {event => setPassword(event.target.value)} fullWidth/>
              </DialogContent>
              <DialogActions>
                <Button onClick = {closeForm}>
                  Close
                </Button>
                <Button onClick = {signup} disabled = {id === "" || firstName === "" || lastName === "" || major === "" || emailAddress === "" || password === ""}>
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
