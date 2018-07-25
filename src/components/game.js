import React from 'react';
import InputBox from './inputbox';
import OutputBox from './outputbox';


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

  render() {
    return (
      <div>
        <p>{this.props.title}</p>
        <InputBox onSubmit={this.onSubmit} />
        {this.state.draw && <OutputBox />}
      </div>
    )
  }
}
