import React from 'react';
import AppShell from './AppShell';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';


export const EachPeople = (props) => (
  <Paper style={{ margin: 16, padding: 16, width: 250, height: 250, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
    <Avatar alt="Remy Sharp" src={props.avatar} style={{ width: 150, height: 150, marginBottom: 20 }} />
    <Typography variant="h6">
        {props.name}
      </Typography>
      <Typography variant="subtitle1">
      {props.company}
      </Typography>
  </Paper>
);

const details = [
  {
    name: 'Akshat Garg',
    avatar: 'https://avatars1.githubusercontent.com/u/12656846?s=460&v=4',
    company: 'Uber'
  },
  {
    name: 'Arundhati Gupta',
    avatar: 'https://avatars2.githubusercontent.com/u/30979369?s=460&v=4',
    company: 'IIT Patna'
  },
  {
    name: 'Akshat Garg',
    avatar: 'https://avatars1.githubusercontent.com/u/12656846?s=460&v=4',
    company: 'Uber'
  },
  {
    name: 'Arundhati Gupta',
    avatar: 'https://avatars2.githubusercontent.com/u/30979369?s=460&v=4',
    company: 'IIT Patna'
  },
  {
    name: 'Akshat Garg',
    avatar: 'https://avatars1.githubusercontent.com/u/12656846?s=460&v=4',
    company: 'Uber'
  },
  {
    name: 'Arundhati Gupta',
    avatar: 'https://avatars2.githubusercontent.com/u/30979369?s=460&v=4',
    company: 'IIT Patna'
  },
  {
    name: 'Akshat Garg',
    avatar: 'https://avatars1.githubusercontent.com/u/12656846?s=460&v=4',
    company: 'Uber'
  },
  {
    name: 'Arundhati Gupta',
    avatar: 'https://avatars2.githubusercontent.com/u/30979369?s=460&v=4',
    company: 'IIT Patna'
  },
  {
    name: 'Akshat Garg',
    avatar: 'https://avatars1.githubusercontent.com/u/12656846?s=460&v=4',
    company: 'Uber'
  },
  {
    name: 'Arundhati Gupta',
    avatar: 'https://avatars2.githubusercontent.com/u/30979369?s=460&v=4',
    company: 'IIT Patna'
  },
];


class People extends React.Component {
  render() {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap'}}>
        {
          details.map((eachPeople) => (
            <EachPeople {...eachPeople} />
          ))
        }
      </div>
    )
  }
};

export default People;