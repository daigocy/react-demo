import React, { Component } from 'react'

import 'bootstrap-timepicker/js/bootstrap-timepicker';
import 'bootstrap-timepicker/css/bootstrap-timepicker.css'

const $ = window.$;

export class TimeInput extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       localTime: ''
    }
  }
  componentDidMount = () => {
    this.$inputEl = $(this.inputEl).timepicker({
      showInputs: false,
      showMeridian: false,
      minuteStep:1,
    });
  }
  
  
  render() {
    return (
      <div>
        <input ref={el => this.inputEl = el}
        type="text"/>
      </div>
    )
  }
}

export default TimeInput;
