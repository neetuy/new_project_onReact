


import React from 'react';
import ReactDom from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
// // import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { browserHistory, Router } from 'react-router';
import routes from './routes.js';
import createPalette from 'material-ui/styles/palette';
import { purple, green, red } from 'material-ui/styles/colors';

// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();

const theme = createMuiTheme({
 
});


ReactDom.render((
  <MuiThemeProvider theme={theme}>
    <Router history={browserHistory} routes={routes} />
  </MuiThemeProvider>), document.getElementById('react-app'));
