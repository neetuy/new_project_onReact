import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/Menu';
// import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const styleSheet = createStyleSheet('Base', (theme) => ({
  root: {
    position: 'relative',
    marginTop: 30,
    width: '100%',
  },
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
  button:{
    margin: theme.spacing.unit,
  }
}));


const Base = ({ children, classes }) => (
  <div>
  
      <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Button contrast  className={classes.button} ><Link to="/"> Home</Link></Button>
          <Button contrast  className={classes.button} ><Link to="j_page"> javascript</Link></Button>
          <Button contrast className={classes.button}><Link to="react_page"> React</Link></Button>
          <Button contrast className={classes.button}><Link to="r_page">Ruby</Link></Button>
        </Toolbar>
      </AppBar>
    </div>
        {children}
  </div>
  
);



Base.propTypes = {
  children: PropTypes.object.isRequired,
  classes:PropTypes.object.isRequired
};
export default withStyles(styleSheet)(Base);

