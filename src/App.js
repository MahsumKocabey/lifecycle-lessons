import React from 'react';
import logo from './logo.svg';
import './App.css';
import Lifecycles from './life-cycle.component';


class App extends React.Component {

  constructor(){
    super();
    this.state = {
      showChild: true,
      text: "",
      counter: 0
    }
  }

  handleChild = () => {
    this.setState( state => ({
      showChild: !state.showChild
    }))
  }

  handleText = () => {
    this.setState( state =>({
      text: state.text + "Text " + state.counter,
      counter: state.counter + 1
    }))
  }
  
  handleReset = () => {
    this.setState( state => ({
      text: "",
      counter: 0
    }))
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <button 
              onClick={this.handleChild} 
            >
            Toggle Lifecycles
          </button>
          <button 
            onClick= {this.handleText}
          >
          Update Text
          </button>
          <button 
            onClick = {this.handleReset}
          >
          RESET
          </button>
        </div>
        {/* If state.showChild is True return Lifecycles component else return null(nothing) */}
        {this.state.showChild ? <Lifecycles text={this.state.text} /> : null}  
      </header>
    </div>
  );
}
}
export default App;
