import React from 'react';
import { Grid, Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Grid item>
      <Box
        sx={{
          backgroundColor: '#5B57D2',
          color: '#fff',
          padding: 2,
          textAlign: 'center',
        }}
      >
        <Typography variant="body2">
          © 2024 My Website. All rights reserved.
        </Typography>
      </Box>
    </Grid>
  );
}

export default Footer; 
