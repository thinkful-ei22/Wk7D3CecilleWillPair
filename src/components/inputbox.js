import React from 'react';

export default function InputBox(props) {
  return (
    <div>
      <label>Make Your Choice!</label>
      <form onSubmit={(e) => {
        props.onSubmit(e);
        e.target.inputbox.value = '';
        }
      } >
      <input
        type="text"
        name="inputbox"
        placeholder="e.g. rock, paper, scissors"

      />
      <button type="submit">play!</button>
      </form>
    </div>
  );
}
