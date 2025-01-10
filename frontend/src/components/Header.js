import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function Header() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar style={{padding: '0px 120px'}}>
        <Typography style={{ flexGrow: 1 }}>
          Welcome to MotorMind
        </Typography>
        <Button color="inherit" >User Guide</Button>
        <Button color="inherit" style={{marginLeft: "20px" }}>Documentation</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
