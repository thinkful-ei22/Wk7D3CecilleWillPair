import React from 'react';
import ReactDOM from 'react-dom';

export default function InputBox(props) {
  return (
    <div>
      <label>Make Your Choice!</label>
      <form id="box" onSubmit={props.onSubmit} >
      <input
        type="text"
        placeholder="e.g. rock, paper, scissors"
        onChange={props.onInputChange}
      />
      <button type="submit">play!</button>
      </form>
    </div>
  );
}
