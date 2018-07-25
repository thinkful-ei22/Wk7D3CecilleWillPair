import React from 'react';
import ReactDOM from 'react-dom';

export default function InputBox(props) {
  return (
    <div>
      <label>Make Your Choice!</label>
      <input type="text" placeholder="e.g. rock, paper, scissors" />
    </div>
  );
}
