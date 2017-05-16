import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import AppBar from 'material-ui/AppBar';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
const styles = {
  navMargin: {
    margin:'0px',
  },
  
};
 const MyNavLinks = () => (
  <ToolbarGroup  >
    <FlatButton label="Home"  style={styles.navMargin} containerElement={<Link to="/"/>}/>
    <FlatButton label="javascript" style={styles.navMargin}  containerElement={<Link to="j_page" />}/>
    <FlatButton label="ruby" style={styles.navMargin}  containerElement={<Link to="r_page" />}/>
    <FlatButton label="react" style={styles.navMargin}  containerElement={<Link to="react_page" />}/>
  </ToolbarGroup> 
);

const Logged = () => (
  <IconMenu
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="log in" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);

Logged.muiName = 'IconMenu';

const Base = ({ children }) => (
  <div>
  
  <AppBar
          iconElementLeft={<MyNavLinks />}
          iconElementRight={<Logged/>}
         
        />

        {children}
  </div>
  
);



Base.propTypes = {
  children: PropTypes.object.isRequired
};

export default Base;


