import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import FanSignUp from '../components/FanSignUp';
import TalentSignUp from '../components/TalentSignUp';
import '../App.css';

const SignInOutContainer = () => {
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const paperStyle = { width: '35em', height: '55em' }
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography component={'span'}>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <Paper elevation={20} style={paperStyle} className="container">
    <div className="buffer"></div>
      {/* nav tab */}
      <Tabs
        className="tabsBox"
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="Fan Sign Up" />

        <Tab label="Talent Sign Up" />
      </Tabs>

      {/* pannel container */}
      <TabPanel value={value} index={0}>
        <FanSignUp handleChange={handleChange} />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <TalentSignUp />
      </TabPanel>

    </Paper>
  )
}

export default SignInOutContainer;