import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import MainBody from './components/MainBody';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
        outputArray: [],
    }
  }

  setOutputArray = (arr) => {
      this.setState({outputArray: arr});
  };


    render() {
    return (
      <div className="App">
            <div className="ui container">

                <Header
                    setOutputArray={this.setOutputArray}
                />

                <MainBody
                    outputArray={this.state.outputArray}
                />

          </div>
      </div>
    );
  }
}


export default App;
