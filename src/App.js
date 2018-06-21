import React, { Component } from 'react';
import './App.css';
import { TimeInput } from './components/integrating-with-other-libraries/timeInput';
import { BarChart } from './components/integrating-with-other-libraries/barChart';
import FatherComp from './components/father-call-son-using-ref/father';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testValue: 10
    };
  }
  componentDidMount = () => {
    this.setState({
      testValue: '1000'
    });
  }
  

  render() {
    return(
      <div>
        <FatherComp />
        <TimeInput />
        <div className="row">
          <div className="col-md-4">
            <BarChart />
          </div>
        </div>
        
      </div>
    )
  }
}

export default App;
