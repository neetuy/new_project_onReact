import React from 'react';
import ReactForm from '../components/ReactForm.jsx';


class ReactPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
  }

  handleChange(value){
    this.setState({
      value: value,
    });
  };


  render() {
    return (  
      <ReactForm 
        handleChange={this.handleChange}
        value={this.state.value}
      />
  );
  }

}

export default ReactPage;
