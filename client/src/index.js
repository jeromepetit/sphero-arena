import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Arrows from "./Arrows";
import OrbsConnect from "./OrbsConnect";
import io from 'socket.io-client';

let socket = io('http://localhost:8080');

let props = { title: 'Universal React', socket:socket};

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(React.createElement(Arrows, props), document.getElementById('arrows'));
ReactDOM.render(React.createElement(OrbsConnect, props), document.getElementById('orbsConnect'));