import React from 'react';
import ReactDOM from 'react-dom';
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
    this.onInputChange = this.onInputChange.bind(this)
  }

  onInputChange(event) {
    this.setState({
      userInput: event.target.value
    })
  }
  onSubmit(event){
    event.preventDefault()
    this.setState({ draw: true })
  }

  render() {
    return (
      <div>
        <p>{this.props.title}</p>
        <InputBox onSubmit={this.onSubmit} onInputChange={this.onInputChange}/>
        {this.state.draw && <OutputBox />}
      </div>
    )
  }
}
