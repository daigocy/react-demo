import React, { Component } from 'react';

class SonComp extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
       value: 0
    }
  }
  render() {
    return(
      <div>
        value in son: {this.state.value}
      </div>
    )
  }
  componentDidMount = () => {
    this.interval = setInterval(this.updateValue.bind(this),1000);
  }
  componentWillUnmount = () => {
    clearInterval(this.interval);
  }
  
  updateValue() {
    if(this.props.updating) {
      let newValue = this.state.value +1;
      this.setState({value: newValue});
    }
  }

  getValue() {
    return this.state.value;
  }
}

export default SonComp;