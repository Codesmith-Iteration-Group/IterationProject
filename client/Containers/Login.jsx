import React from 'react';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { redirect, useNavigate } from 'react-router-dom';

import axios from 'axios';

import { getHostEvents, getPartEvents } from '../actions/actions.js';


const LogIn = () => {
  //   console.log('you are rendering a login page');
  const navigate = useNavigate();
  const defaultTheme = createTheme();

  const login = async (uname, pass) => {

    

    try {

      const result = await fetch('http://localhost:3000/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
          username: uname,
          password: pass,
        })
      })
      // console.log('result is: ', result);
      // const result = await axios.post('http://localhost:3000/user/login', {
      //   username: uname,
      //   password: pass,
      // },{
      //   credentials: "include"
      // });
      if (result) {
        console.log('result hit')
        //dispatch(getHostEvents());  <<<<<----- NEED TO FOLLOW THIS... AS SOON AS ITS IN THE CODE IT BREAKS
        navigate('/user/home');
      }
    } catch (err) {
      console.log(err);
    }
  };
  
  const handleSubmit = (event) => {
    console.log('event', event)
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    login(data.get('username'), data.get('password'));
  };


  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component='main' maxWidth='xs'>
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
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
          <Box
            component='form'
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin='normal'
              required
              fullWidth
              id='username'
              label='Username'
              name='username'
              autoComplete='username'
              autoFocus
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
            />
            <FormControlLabel
              control={<Checkbox value='remember' color='primary' />}
              label='Remember me'
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href='/user/signup' variant='body2'>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default LogIn;
