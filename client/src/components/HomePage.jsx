import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styleSheet = createStyleSheet('Home', (theme) => ({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  textCenter:{
    textAlign:'center',
  }
}));

function Home(classes) {
  
  const bull = <span className={classes.bullet}>&bull;</span>;

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography component="p" className={classes.textCenter}>
            well meaning and kindly.<br />
           
          </Typography>
        </CardContent>
        
      </Card>
    </div>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(Home);