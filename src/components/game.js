import React from 'react';
import InputBox from './inputbox';
<<<<<<< HEAD
//import OutputBox from './outputbox';
=======
import OutputBox from './outputbox';
import Score from './score';
>>>>>>> 8202a2f924e98b07e1fda7c7d4b251b751390843


export default class Game extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      draw: false,
      userInput: ''
    }
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(event) {
    event.preventDefault()
    this.setState({
      draw: true,
      userInput: event.target.inputbox.value
    })
  }


  onComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3) + 1;
      let output;
      if(computerChoice===1){
        output = 'rock';
      } else if(computerChoice===2) {
        output = 'scissors'
      } else {
        output= 'paper'
      }
      return output;

  }

  render() {
    return (
      <div>
        <p>{this.props.title}</p>
        <InputBox onSubmit={this.onSubmit} />

        <p>{`User threw ${this.state.userInput}!`}</p>
        {this.state.draw && `Computer threw ${this.onComputerChoice()}!`}

      </div>
    )
  }
}
