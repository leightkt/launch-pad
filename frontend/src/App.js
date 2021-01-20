
import './App.css';
import React, { Component } from 'react';
import ThePlanets from './components/ThePlanets'
import logo from './Launch3.png'
import alien from './assets/chat-bot.png'

class App extends Component {

  state={
    planets: [],
    isClicked: false,
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

  displayChatBox = () => {
    this.setState({isClicked: !this.state.isClicked})
  }



  render(){

    return (
      <div>
        <header>
          <section className="header-content">
            <img id="logo"src={logo} alt="Launch Pad, helping you find a new home that is out of this world!"/>
            
              {
              this.state.isClicked ?
              <div className="chat-box">How can I help you find your new intergalactic home? 
                <input type="text"/><input type="submit"/> </div> :
              null
                }

            
            <img onClick={this.displayChatBox} id="alien" src={alien} alt="alien chat-bot"/>
          </section>
          
        </header>
        <ThePlanets planets={this.state.planets}/>
        
      </div>
        
      
    );
  }

  }

  

export default App;
