import React from 'react';
import RubyForm from '../components/RubyForm.jsx';


class RubyPage extends React.Component {

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
      <RubyForm 
        handleChange={this.handleChange}
        value={this.state.value}
      />
  );
  }

}

export default RubyPage;
