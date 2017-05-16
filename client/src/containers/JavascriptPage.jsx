import React from 'react';
import JavascriptForm from '../components/JavascriptForm.jsx';


class JavascriptPage extends React.Component {

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
      <JavascriptForm 
        handleChange={this.handleChange}
        value={this.state.value}
      />
  );
  }

}

export default JavascriptPage;
