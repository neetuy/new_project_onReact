import SignUpDialog from './SignUpDialog.jsx';
import SignInDialog from './SignInDialog.jsx';
import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Menu, { MenuItem, MenuIcon } from 'material-ui/Menu';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Hidden from 'material-ui/Hidden';
import CloseIcon from 'material-ui-icons/Close';
import Slide from 'material-ui/transitions/Slide';
import Dialog from 'material-ui/Dialog';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';



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
    // margin: theme.spacing.unit,
  },
  
    paper: {
    padding:10,
    textAlign: 'left',
    boxShadow:'none',
    backgroundColor:'#3f51b5',
  },
   paperRight: {
    textAlign: 'right',
    boxShadow:'none',
    backgroundColor:'#3f51b5',
  },

  navLink: {
    padding:10,
  },
  offset2:{
    marginLeft:'16.6%',
  },
  listPadding:{
    padding:8,
  },
  
  menu:{
    padding:0,

  },
 typography: {
   
    left: 0,
    top: 0,
    padding: 8,
  },
  textColor:{
    color:"#00bcd4",
  },
  dialogCustom:{
    textTransform: 'none',
  }
}));


const options = [
  'Refresh',
  
];

class Base extends React.Component {

   constructor(props) {
    super(props);
    this.state = {
      anchorEl: undefined,
      open: false,
      button : undefined,
      selectedIndex: 0,
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
        <Grid container gutter={8}>
          <Grid  hidden={{ smUp: true }} item sm >
            <Paper className={classes.paper}>
              <Link>&#9776;</Link> 
            </Paper>
          </Grid>
          <Grid  hidden={{ smDown: true }} item sm={8} >
            <Paper className={classes.paper}>
              <Typography  className={classes.typography}>
                <Link to="/" className={classes.navLink}> Home</Link>
                <Link to="j_page"  className={classes.navLink}> Javascript</Link>
                <Link to="react_page"  className={classes.navLink}> React</Link>
                <Link to="r_page"  className={classes.navLink}>Ruby</Link>
              </Typography>
            </Paper>
          </Grid>
          
          <Grid item sm={2} className={classes.offset2} >
            <Paper className={classes.paperRight} > 
            <List className={classes.listPadding}>
              <ListItem
                button
                aria-haspopup="true"
                aria-owns="simple-menu"
                onClick={this.handleClickListItem}
              >
                <ListItemText
                  className={classes.textColor}
                  secondary="Refresh"
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
            <MenuItem>Refresh</MenuItem>
            <MenuItem>
            <SignUpDialog
            className={classes.dialogCustom}
            />
            </MenuItem>
            <MenuItem>
            <SignInDialog
            className={classes.dialogCustom}
            />
            </MenuItem>
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





