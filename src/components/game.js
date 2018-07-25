import React from 'react';
import InputBox from './inputbox';
import OutputBox from './outputbox';
//import Score from './score';


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

  resetForm(event){
    document.getElementById('box').reset();
  }

  render() {
    return (
      <div>
        <p>{this.props.title}</p>
        <InputBox onSubmit={this.onSubmit} />
        <p>User drew {this.state.userInput} </p>
        {this.state.draw && <OutputBox />}
        <Score user={this.state.userInput} />
      </div>
    )
  }
}
