import React from 'react';
import ReactForm from '../components/ReactForm.jsx';


class ReactPage extends React.Component {

  /**
   * Class constructor.
   */
 constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, index){
    this.setState({ index });
  }


  render() {
    return (  
      <ReactForm 
        handleChange={this.handleChange}
        index={this.state.index}
      />
  );
  }

}

export default ReactPage;
