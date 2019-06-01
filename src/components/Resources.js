import React from 'react';
import AppShell from './AppShell';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';


class Resources extends React.Component {
  render() {
    return (
      <Paper style={{ margin: '16px 0', padding: 16, width: '100%', height: 250, }}>
          <ul>
            <li>Learn</li>
            <li>Mentor</li>
            <li>Communication</li>
            </ul>
          </Paper>

    )
  }
};

export default Resources;