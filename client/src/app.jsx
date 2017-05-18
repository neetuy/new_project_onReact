import React from 'react';
import ReactDom from 'react-dom';
import routes from './routes.js';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';
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
