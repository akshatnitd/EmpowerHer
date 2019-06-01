import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { theme } from './MUItheme';
import NotFound from './components/NotFound.js';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Home from './components/Home';

class App extends Component {
  static propTypes = {
    history: PropTypes.object,
    location: PropTypes.object
  };

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Switch>
        <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/*:path(error-404|)" component={NotFound} />
        </Switch>
      </MuiThemeProvider>
    );
  }
}

export default App;

