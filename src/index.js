import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './components/game';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Game title="Let's Play Rock Paper Scissors!"/>, document.getElementById('root'));
registerServiceWorker();
