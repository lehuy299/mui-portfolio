import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Navbar from './components/Navbar';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import About from './components/About';
import Intro from './components/Intro';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar/>
      <Intro />
      <Container maxWidth="lg">
        <About/>
      </Container>
    </React.Fragment>
  );
}

export default App;
