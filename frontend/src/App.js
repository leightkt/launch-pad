
import './App.css';
import React, { Component } from 'react';
import ThePlanets from './components/ThePlanets'
import logo from './Launch3.png'
import alien from './assets/chat-bot.png'

class App extends Component {

  state={
    planets: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/planets')
      .then(response => response.json())
      .then(bodies => {
        bodies.map(planet => (
          this.setState({planets: [...this.state.planets, planet]})
        ))
      }
      )
  }


  render(){

    return (
      <div>
        <header>
          <section className="header-content">
            <img src={logo} alt="Launch Pad, helping you find a new home that is out of this world!"/>
            <img src={alien} alt="alien chat-bot"/>
          </section>
          
        </header>
        <ThePlanets planets={this.state.planets}/>
        
      </div>
        
      
    );
  }

  }

  

export default App;
