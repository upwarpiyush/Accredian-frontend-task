import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
// import NavBar from './NavBar';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { login } from "../services/operations/authAPI"


const defaultTheme = createTheme();



export default function SignIn() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [formData, setFormData] = useState( {
    email:"", password:""
  })
  
  const { email, password } = formData
  
  function changeHandler(event) {
  
    setFormData( (prevData) =>(
        {
            ...prevData,
            [event.target.name]:event.target.value
        }
    ) )
  
  }

  function submitHandler(event) {
    event.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      alert("Please fill in all fields.");
      return;
    }

    // console.log(formData);
    dispatch(login(email, password, navigate))
    // navigate("/dashboard")
  }

  return (
    <ThemeProvider theme={defaultTheme} >
      {/* <NavBar /> */}
      <Container component="main" maxWidth="xs" sx={{marginTop:"7rem"}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={submitHandler} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={changeHandler}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={changeHandler}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}