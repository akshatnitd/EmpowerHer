import React from 'react';
import AppShell from './AppShell';
import App from '../App';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import InputLabel from '@material-ui/core/InputLabel';

import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



import { MuiPickersUtilsProvider, TimePicker, DatePicker } from 'material-ui-pickers';

import { EachPeople } from './People';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  button: {
    margin: 16
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class Dashboard extends React.Component {

  state = {
    // The first commit of Material-UI
    selectedDate: new Date(),
    duration: 30
  };

    handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };


  handleDateChange = date => {
    this.setState({ selectedDate: date });
  };

  render() {
    const { classes } = this.props;
  const { selectedDate } = this.state;
    return (
        <div style={{ display: 'flex', flexDirection: 'column', margin: 16, width: '100%', margin: 16, marginRight: 60 }}>
          <Typography variant="h5"><b>Book a Slot</b></Typography>
          <Paper style={{ margin: '16px 0', padding: 16, width: '100%', height: 250 }}>
            <Typography variant="h6"><b>Add a new Slot</b></Typography>
            <div style={{ display: 'flex' }}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                  margin="normal"
                  label="Date"
                  value={selectedDate}
                  onChange={this.handleDateChange}
                  style={{ margin: 16 }}
                />
                <TimePicker
                  margin="normal"
                  label="Time"
                  value={selectedDate}
                  onChange={this.handleDateChange}
                  style={{ margin: 16 }}

                />
              </MuiPickersUtilsProvider>



              <FormControl style={{ margin: 16}}>
                <InputLabel shrink htmlFor="age-label-placeholder">
                  Duration
                </InputLabel>
                <Select
                  value={this.state.duration}
                  onChange={this.handleChange}
                  className={classes.selectEmpty}
                  input={<Input name="age" id="age-label-placeholder" />}
                  displayEmpty

                  inputProps={{
                    name: 'age',
                    id: 'age-simple',
                  }}
                >
                  <MenuItem value="">
                    <em>-</em>
                  </MenuItem>
                  <MenuItem value={30}>30 minutes</MenuItem>
                  <MenuItem value={60}>1 hour</MenuItem>
                  <MenuItem value={90}>1.5 hours</MenuItem>

                </Select>
              </FormControl>

            </div>
            <Button variant="contained" color="primary" className={classes.button}>
              Add
      </Button>
          </Paper>
          <Typography variant="h5"><b>Your Slots</b></Typography>
        <Paper style={{ margin: '16px 0', padding: 16, width: '100%', height: 250, }}>
          <ul>
            <li>2nd June 2019 02:00 PM</li>
            <li>3rd June 2019 02:00 PM</li>
            <li>4th June 2019 02:00 PM</li>
            </ul>
          </Paper>
        </div>
    );
  }
};

export default withStyles(styles)(Dashboard);