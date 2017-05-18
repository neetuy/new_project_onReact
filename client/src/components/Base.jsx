import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import Menu, { MenuItem, MenuIcon } from 'material-ui/Menu';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import List, { ListItem, ListItemText } from 'material-ui/List';

const styleSheet = createStyleSheet('Base', (theme) => ({
  root: {    
    marginTop: 30, 
  },
  appBar: {
    position: 'relative',
  },
  // flex: {
  //   flex: 1,
  // },
  button:{
    margin: theme.spacing.unit,
  },
  
  
    paper: {
    textAlign: 'left',
    boxShadow:'none',
    backgroundColor:'#3f51b5',
  },
   paperLeft: {
    textAlign: 'right',
    boxShadow:'none',
    backgroundColor:'#3f51b5',
  },

  menuList:{
    top: 80,
    left: 1186.656,
  }
}));


const options = [
  'Refresh',
  'Signin',
  'Signup',
];

class Base extends React.Component {

   constructor(props) {
    super(props);
    this.state = {
      anchorEl: undefined,
      open: false,
      button : undefined,
      selectedIndex: 1,
    };
    this.handleClickListItem = this.handleClickListItem.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleMenuItemClick = this.handleMenuItemClick.bind(this);
  }

  

  handleClickListItem(event){
    this.setState({ open: true, anchorEl: event.currentTarget });
  };

  handleRequestClose(){
    this.setState({ open: false });
  };
  handleMenuItemClick(event, index){
    this.setState({ selectedIndex: index, open: false });
  };

  render() {
    const classes = this.props.classes;
    const children = this.props.children;
    
    return (
      

      <div>
      <AppBar className={classes.appBar}>
        <Toolbar>
        <Grid container gutter={24}>
          <Grid  item xs={8} >
            <Paper className={classes.paper}>
              <Button contrast  className={classes.button} ><Link to="/"> Home</Link></Button>
              <Button contrast  className={classes.button} ><Link to="j_page"> javascript</Link></Button>
              <Button contrast className={classes.button}><Link to="react_page"> React</Link></Button>
              <Button contrast className={classes.button}><Link to="r_page">Ruby</Link></Button>
          </Paper>
          </Grid>
          <Grid item xs={4} >
            <Paper className={classes.paperLeft} > 
            <List>
              <ListItem

                button
                aria-haspopup="true"
                aria-owns="simple-menu"
                onClick={this.handleClickListItem}
              >
                <ListItemText
                    
                  secondary={options[this.state.selectedIndex]}
                />
              </ListItem>
            </List>
            <Menu
              id="simple-menu"
              anchorEl={this.state.anchorEl}
              className={classes.menu}
              open={this.state.open}
              onRequestClose={this.handleRequestClose}
            >
            {options.map((option, index) => {
            return (
              <MenuItem 
                key={option}
                selected={index === this.state.selectedIndex}
                onClick={(event) => this.handleMenuItemClick(event, index)}
              >
              {option}
              </MenuItem>
               );
          })}
            </Menu>
        </Paper>
        </Grid>
        </Grid>
        </Toolbar>
      </AppBar>
      {children}
    </div>
        
        
     
    );
  }
}
Base.propTypes = {
  classes:PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(Base);
