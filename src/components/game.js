import React from 'react';
import ReactDOM from 'react-dom';
import InputBox from './inputbox';
import OutputBox from './outputbox';


export default class Game extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      userInputChange: false
    }
  }

  toggleUserInput(value){
    this.setState({
      userInputChange: value
    })
  }

  render() {
    return (
      <div>
        <p>{this.props.title}</p>
        <InputBox onSubmit={e => this.toggleUserInput(true)}/>
        <OutputBox />
      </div>
    )
  }
}
