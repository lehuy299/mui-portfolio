import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: false,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    style: {
      backgroundColor: trigger ? "white" : "transparent",
      color: trigger ? "black" : "white",
      transition: trigger ? "0.3s" : "0.5s",
      boxShadow: "none",
      padding: "10px 0px"
    }
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function ElevateAppBar(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Huy
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button color="inherit">Item 1</Button>
              <Button color="inherit">Item 2</Button>
              <Button color="inherit">Item 3</Button>
            </Stack>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />

    </React.Fragment>
  );
}
