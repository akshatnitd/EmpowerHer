import React from 'react';
import AppShell from './AppShell';
import App from '../App';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import People from './People';
import Dashboard from './Dashboard';
import Resources from './Resources';
import { EachPeople } from './People';


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
      <div style={{ display: 'flex', marginTop: 50 }}>
          <EachPeople name="Akshat Garg" company="Uber" avatar="https://avatars1.githubusercontent.com/u/12656846?s=460&v=4" />
          <div style={{ width: '100%', marginRight: 60}}>
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
          {this.state.value === 0 ? <Dashboard /> : null}
          {this.state.value === 1 ? <People /> : null}
            {this.state.value === 2 ? <Resources /> : null}
            </div>
        </div>
      </AppShell>
    )
  }
};

export default Home;