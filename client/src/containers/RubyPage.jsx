import React from 'react';
import RubyForm from '../components/RubyForm.jsx';


class RubyPage extends React.Component {

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
      <RubyForm 
        handleChange={this.handleChange}
        index={this.state.index}
      />
  );
  }

}

export default RubyPage;
