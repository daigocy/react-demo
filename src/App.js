import React, { Component } from 'react';
import './App.css';
import { TimeInput } from './components/timeInput';
import { BarChart } from './components/barChart';

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
