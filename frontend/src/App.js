
import './App.css';
import React, { Component } from 'react';
import ThePlanets from './components/ThePlanets'

class App extends Component {

  state={
    planets: []
  }

  componentDidMount(){
    fetch('https://api.le-systeme-solaire.net/rest/bodies')
      .then(response => response.json())
      .then(bodies => {
        
      })
  }


  render(){

    return (
      <div>
        <header><h1>LaunchPad</h1><p>Helping you find a new home that is out of this world!</p></header>
        <ThePlanets planets={this.state.planets}/>
        
      </div>
        
      
    );
  }

  }

  

export default App;
