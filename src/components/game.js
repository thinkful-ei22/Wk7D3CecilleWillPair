import React from 'react';
import InputBox from './inputbox';

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

displayWinner(computerChoice) {
  const userChoice = this.state.userInput;
  
  console.log('user choice =' + userChoice);
  console.log( 'computer choice =' + computerChoice);


  if(userChoice === 'rock' && computerChoice ==='scissors') {
    return 'The Winner is User';
  }
  else if(userChoice === 'rock' && computerChoice ==='rock') {
    return 'Tie';
  }
  else if(userChoice === 'scissors' && computerChoice ==='scissors') {
    return 'Tie';
  }
  else if(userChoice === 'paper' && computerChoice ==='paper') {
    return 'Tie';
  }
  else if(userChoice === 'rock' && computerChoice ==='paper') {
    return 'The Winner is Computer';
  }
  else if(userChoice === 'paper' && computerChoice ==='scissors') {
    return 'The Winner is Computer';
  }
  else if(userChoice === 'scissors' && computerChoice ==='rock') {
    return 'The Winner is Computer';
  }
  else if(userChoice === 'scissors' && computerChoice ==='paper') {
    return 'The Winner is User';
  }
  else if(userChoice === 'paper' && computerChoice ==='rock') {
    return 'The Winner is User';

  }

}

  render() {
    const computerChoice = this.onComputerChoice();
    return (
      <div>
        <p>{this.props.title}</p>
        <InputBox onSubmit={this.onSubmit} />

       {  this.state.draw && <p>{`User threw ${this.state.userInput}!`}</p>}

        {this.state.draw && `Computer threw ${computerChoice}!`}
       { this.state.draw && <p>{`${this.displayWinner(computerChoice)}`}</p>}

      </div>
    )
  }
}