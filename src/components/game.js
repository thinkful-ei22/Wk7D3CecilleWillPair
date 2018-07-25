import React from 'react';
import ReactDOM from 'react-dom';
import InputBox from './inputbox';

export default class Game extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <p>{this.props.title}</p>
        <InputBox />
      </div>
    )
  }
}
