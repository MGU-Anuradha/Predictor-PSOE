import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline} from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import '@fontsource/poppins'; 
import Home from './components/Home'; 


const theme = createTheme({
  palette: {
    primary: {
      main: '#5B57D2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif', // Set Poppins as the default font
    h1: {
      fontWeight: 700, // Bold
    },
    h2: {
      fontWeight: 600,
    },
    body1: {
      fontWeight: 400,
      fontSize: '1rem',
    },
    button: {
      textTransform: 'none', // Optional: Disable uppercase for buttons
      fontWeight: 500,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Router>
        <Routes>
            <Route index element={<Home/>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
