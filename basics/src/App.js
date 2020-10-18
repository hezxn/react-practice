import React, { Component } from 'react';
import './App.css';
import Dog from './Dog/Dog'
import Count from './Count/Count'

class App extends Component {
  state = {
    count: 0
  }

  updateCount = () => {
  this.setState(state => ({
    count: state.count + 1
  }))
}
  
  render() {
   return (
      <div className="App">
        <h1> Hello World</h1>
        <p>Rendering same component by passing props</p>
        <Dog breed="Husky" /> <br />
        <Dog breed="Golden Retreiver"/><br />
        <Dog breed="German Shephard">I'm a children prop.</Dog><br />
        
        <p> State in class based component</p>
        <span>{this.state.count}  </span>
        <button onClick={this.updateCount}> ++ </button>
        
        <Count />
      </div>
    );
  }
}

export default App;
