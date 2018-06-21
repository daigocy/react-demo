import React, { Component } from 'react';

import SonComp from './son';

import './father.css';

class  FatherComp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       value: 0,
       updating: true,
    }
  }

  render() {
    return(
      <div className="comp-father">
        <SonComp ref="son" updating={this.state.updating}/>
        value in father: {this.state.value}
        <div>
          <a onClick={this.getSonValue.bind(this)}>获取</a>
          <a onClick={this.toggleSonUpdate.bind(this)}>{this.state.updating?'暂停':'开始'}</a>
        </div>
        
      </div>
    )
    
  }
  getSonValue() {
    let son = this.refs.son;
    let sonValue = son.getValue();
    this.setState({
      value: sonValue
    })
  }
  toggleSonUpdate() {
    this.setState({
      updating: !this.state.updating
    })
  }
  
}

export default FatherComp;
