import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Navbar from './components/Navbar';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar/>
    </React.Fragment>
  );
}

export default App;
