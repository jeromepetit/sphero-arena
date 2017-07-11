import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import OrbsConnect from "./OrbsConnect";
import Joystick from "./Joystick";
import Shoot from "./Shoot";
import io from 'socket.io-client';
import FloorPlan from "./FloorPlan";
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

let socket = io();

const BasicExample = (props) => (
    <Router>
        <div>
            <ul>
                <li><Link to="/connect">Orbs connection</Link></li>
                <li><Link to="/FloorPlan">FloorPlan</Link></li>
                <li><Link to="/controls">controls</Link></li>
            </ul>

            <hr/>

            <Route exact path='/FloorPlan' component={() => (
                <FloorPlan socket={socket}/>
            )}/>
            <Route exact path='/connect' component={() => (
                <OrbsConnect socket={socket}/>
            )}/>
            <Route exact path='/controls' component={() => (
            <div>
                <div>
                    <Joystick socket={socket}/>
                </div>
                <div>
                    <Shoot socket={socket}/>
                </div>
            </div>
            )}/>
        </div>
    </Router>
);

ReactDOM.render(React.createElement(BasicExample), document.getElementById('basic'));




