import React from 'react';
import AppShell from './AppShell';
import App from '../App';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import People from './People';


class Home extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    return (
      <AppShell>
        <div>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Dashboard" />
            <Tab label="People" />
            <Tab label="Resources" />
          </Tabs>
          <div>

          </div>
          <People />
          <div>

            </div>
        </div>
      </AppShell>
    )
  }
};

export default Home;