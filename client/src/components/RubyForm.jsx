
import React, { PropTypes } from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';
import Grid from 'material-ui/Grid';


const TabContainer = (props) => (
  <div style={{ padding: 20 }}>
    {props.children}
  </div>
);

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styleSheet = createStyleSheet('BasicTabs', (theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
    height:'100%'
  },
    paper: {
    padding: 16,
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
}));

class RubyForm extends React.Component {
  
  render() {
    const classes = this.props.classes;
    const handleChange = this.props.handleChange;
    const index = this.props.index;

    return (
      <div className={classes.root}>
        <Grid container gutter={24}>
          <Grid item xs={8} >
            <Paper className={classes.paper}>
            <Tabs index={index} onChange={handleChange}>
              <Tab label="Item One" />
              <Tab label="Item Two" />
              <Tab label="Item Three" />
            </Tabs>
              {index === 0 && <TabContainer>{'Item One'}</TabContainer>}
              {index === 1 && <TabContainer>{'Item Two'}</TabContainer>}
              {index === 2 && <TabContainer>{'Item Three'}</TabContainer>}
            </Paper>
          </Grid>
          <Grid item xs={4} >
            <Paper className={classes.paper}>
              hi
            </Paper>
          </Grid>

        </Grid>
      </div>  
    );
  }
}

RubyForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleChange:PropTypes.func.isRequired,
  index:PropTypes.number.isRequired
};

export default withStyles(styleSheet)(RubyForm);