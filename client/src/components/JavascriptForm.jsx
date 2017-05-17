import React, { PropTypes } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';
import {
  cyan500, cyan700,
  pinkA200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';

export const Colors = {
  blue: '#034FC6',
  white: '#fff',
  grey: '#2A2F33',
  greyLight: '#45505a'
};
const styles = {
  cardWidth: {
  	width: "100%",
  },
   headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
   default_tab:{
      color: Colors.blue,
      backgroundColor: Colors.white,
      fontWeight: 400,
    },

};


const JavascriptForm = (
	handleChange,
	value
	) => (

  	<Card className="container" style={styles.cardWidth}>
  		<Tabs>
        <Tab label="Tab A" value="a" style={styles.default_tab}>
          <div>
            <h2 style={styles.headline}>Controllable Tab A</h2>
            <p>
              Tabs are also controllable if you want to programmatically pass them their values.
              This allows for more functionality in Tabs such as not
              having any Tab selected or assigning them different values.
            </p>
          </div>
        </Tab>
        <Tab label="Tab B" value="b" style={styles.default_tab}>
          <div>
            <h2 style={styles.headline}>Controllable Tab B</h2>
            <p>
              This is another example of a controllable tab. Remember, if you
              use controllable Tabs, you need to give all of your tabs values or else
              you wont be able to select them.
            </p>
          </div>
        </Tab>
      </Tabs>
  	</Card>
  	
  
);

JavascriptForm.propTypes={
	handleChange:PropTypes.func.isRequired,
	value:PropTypes.string.isRequired

}
export default JavascriptForm;
