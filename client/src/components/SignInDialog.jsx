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


const styles={
  dialog:{
    width:'60%',
    height:'50%',
    marginLeft:'20%',
    marginTop:'10%'
  },
  listPadding:{
    padding:'0px',
  },
    paddingListItem:{
      paddingLeft:'0px',
  }
}

class SignInDialog extends React.Component {
  constructor(){
    super();
    this.state = {
    open: false,
  };
  this.handleRequestClose = this.handleRequestClose.bind(this);
  this.handleOpen = this.handleOpen.bind(this);
  }
  

  handleRequestClose(){
    this.setState({ open: false });
  };

  handleOpen(){
    this.setState({ open: true });
  };

  render() {
    
    return (
      <div>
        <List style={styles.listPadding} onClick={this.handleOpen}>
          <ListItem style={styles.paddingListItem}>
            <ListItemText primary="SignIn" />
          </ListItem>
        </List>  
        <Dialog
        style={styles.dialog}
          fullScreen
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
          transition={<Slide direction="down" />}
        >
          <AppBar >
            <Toolbar>
              <IconButton contrast onClick={this.handleRequestClose}>
                <CloseIcon />
              </IconButton>
              <Typography type="title" colorInherit >
                close
              </Typography>
             
            </Toolbar>
          </AppBar>
            <form >
                <h2 className="card-heading">Sign In</h2>
                <div className="field-line">
                  <TextField
                    label="Email"
                    name="email"
                   
                  />
                </div>

                <div className="field-line">
                  <TextField
                    label="Password"
                    type="password"
                    
                  />
                </div>
                <div className="button-line">
                    <Button primary>
                    SignIn
                  </Button>
              </div>
                 
              </form>
            
        </Dialog>

      </div>
    );
  }
}

export default SignInDialog;
