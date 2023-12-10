import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <Box variant="h6" >
      <AppBar>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' ,}}>
          
          <Typography variant="h6" component="div" >
            <a href='/' style={{textDecoration:'none', color:'whitesmoke'}}>Accredian</a>
          </Typography>
          <div>
            {/* <Link to={'/login'}>
            
            </Link> */}
            <Button variant="outlined" color="inherit" sx={{margin:'1rem'}}><a href="/login" style={{textDecoration:'none', color:'whitesmoke'}}>Login</a></Button>
            <Button variant="outlined" color="inherit"><a href="/signup" style={{textDecoration:'none', color:'whitesmoke'}}>SignUp</a></Button>
            
          </div>
       </Toolbar>
       </AppBar>
    </Box>
  );
}