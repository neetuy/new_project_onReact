import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Tabs, { Tab } from 'material-ui/Tabs';

const TabContainer = (children) => (
  <div style={{ padding: 20 }}>
    {children}
  </div>
);

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};



const styleSheet = createStyleSheet('JavascriptForm', (theme) => ({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
   root: {
    flexGrow: 1,
    marginTop: 30,
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

 
}));

function JavascriptForm(handleChange, classes,index) {
  
  const bull = <span className={classes.bullet}>&bull;</span>;

  return (
    <Card>
      <div className={classes.root}>
        <Grid container gutter={24}>
          <Grid item xs={12} sm={8}>
            <Paper className={classes.paper}>
            <Tabs index={index} handleChange={handleChange}>
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>
          {index === 0 && <TabContainer>{'Item One'}</TabContainer>}
          {index === 1 && <TabContainer>{'Item Two'}</TabContainer>}
          {index === 2 && <TabContainer>{'Item Three'}</TabContainer>}
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>
              
            </Paper>
          </Grid>
          
        </Grid>
      </div>
    </Card>
  );
}

JavascriptForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  index: PropTypes.object.isRequired,
};



export default withStyles(styleSheet)(JavascriptForm);