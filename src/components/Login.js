import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import AppShell from './AppShell';
import { Link } from 'react-router-dom'

import clsx from 'clsx';


const styles = theme => ({
  root: {
    padding: theme.spacing(3, 2),
    width: '500px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh'
  },
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    flexBasis: 200,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  }
});

class Login extends React.Component {

  state = {
    email: '',
    password: ''
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  render() {
    const { classes } = this.props;
    console.log(this.props)
    return (
      <AppShell>
      <div className={classes.container}>
        <Paper className={classes.root}>
          <div style={{width: '70%'}}>
            <TextField
              label="Name"
              onChange={this.handleChange('name')}
              margin="normal"
              variant="outlined"
              fullWidth="true"
            />
            </div>
            <div style={{width: '70%', marginBottom: 20}}>
            <TextField
              variant="outlined"
              type={'password'}
              label="Password"
              onChange={this.handleChange('password')}
              fullWidth
            />
            </div>

            <Link to={{ pathname: '/home' }}>
            <Button
              variant="contained"
            color="primary"
              style={{
                width: '275px',
                margin: '10px auto',
                display: 'block',
              }}
            >
              LogIn
          </Button>
          </Link>

        </Paper>
      </div>
      </AppShell>
    );
  }
}

export default withStyles(styles)(Login);
