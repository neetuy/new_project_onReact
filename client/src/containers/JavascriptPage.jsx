import React from 'react';
import JavascriptForm from '../components/JavascriptForm.jsx';


class JavascriptPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
    this.handleChange = this.handleChange.bind();
  }

  

   handleChange(event, index){
    this.setState({ index });
  }

  render() {
    return (  
      <JavascriptForm 
        handleChange={this.handleChange}
        index={this.state.index}
      />
  );
  }

}

export default JavascriptPage;
