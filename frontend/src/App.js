
import './App.css';
import React, { Component } from 'react';
import ThePlanets from './components/ThePlanets'
import logo from './Launch3.png'
import alien from './assets/chat-bot.png'

class App extends Component {

  state={
    planets: [],
    isClicked: false,
    input: "",
    messages: [],
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

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({messages: [...this.state.messages, this.state.input]})
    this.setState({input: ""})

  }

  handleChange = (event) => {
    this.setState({input: event.target.value})
  }

  removeMessage= (event) => {
    const indexOfMessage = this.state.messages.indexOf(event.message)
    console.log(event.message)
    console.log(indexOfMessage)
    
    this.setState({messages: []})
    
    // this.state.messages.splice(indexOfMessage, 1)
    this.setState({messages: this.state.messages.filter(message => message !== event.message)})

    
  }



  render(){

    return (
      <div>
        <header>
          <section className="header-content">
            <img id="logo"src={logo} alt="Launch Pad, helping you find a new home that is out of this world!"/>
            
              {
              this.state.isClicked ? 
              <section id="alien-chat-box">
                <div className="chat-box"> How can I help you find your new intergalactic home?

                {this.state.messages.map(message => (
                  <div className="message">
                    <p >{message} </p>
                    <p className="x-box" value={message} onClick={() => this.removeMessage({message})}>X</p>
                  </div>
                ))}

                  <div>
                    <form onSubmit={this.handleSubmit}>
                      <input onChange={this.handleChange} type="text" value={this.state.input}/>
                      <input  type="submit" /> 
                    </form>
                  </div>
                    
                </div> 
              
              </section> : null
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
