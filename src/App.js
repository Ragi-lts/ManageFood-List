import './App.css';
import Register from './components/Food-register';
import HEAD from './Header/index';
import '@fontsource/roboto';
import React from 'react';
import { Container, Box } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  offset: theme.mixins.toolbar,
}))
function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <React.Fragment>
        <HEAD />
        <div className={classes.offset} />
      </React.Fragment>
      <Box py={2}>
        <Register />
      </Box>



    </div>
  );
}

export default App;
