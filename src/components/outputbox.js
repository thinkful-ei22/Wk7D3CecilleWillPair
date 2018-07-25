import React from 'react';

import ReactDOM from 'react-dom';

export default function OutputBox(props) {
  const computerChoice = Math.floor(Math.random() * 3) + 1;
    let output;
    if(computerChoice===1){
      output = 'Rock';
    } else if(computerChoice===2) {
      output = 'Scissors'
    } else {
      output= 'Paper'
    }

    return (
        <div>
            <p>Computer drew {output}</p>
        </div>
    );
}
