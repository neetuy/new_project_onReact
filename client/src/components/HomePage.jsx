import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';

const styles = {
  
  cardWidth: {
  	width: "100%",
  },
}
const HomePage = () => (
  <Card className="container text-center" style={styles.cardWidth}>
    <CardTitle title="React Application" subtitle="This is the home page." />
  </Card>
);

export default HomePage;
