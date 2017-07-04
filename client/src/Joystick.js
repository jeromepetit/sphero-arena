import React, { Component } from 'react';
import './Joystick.css';

class Joystick extends Component {
    constructor(props) {
        super(props);
        this.var;
    }

    componentDidMount = () => {
        let socket = this.props.socket;
        const joystickParams = {
            zone: document.getElementById("joystick"),
            color: "red",
        };
        const manager = require('nipplejs').create(joystickParams);
        manager.on('added', function(evt, nipple) {
            console.log("added");
            nipple.on('move', function(evt,data) {
                console.log(data.angle.degree);
                if (data.angle.degree > 67.5 && data.angle.degree < 135 ){
                    clearInterval(this.var);
                    this.var = setInterval(function () {
                        console.log('up');
                        socket.emit('turn', (-data.angle.degree % 360 + 360) % 360);
                    }, 400);
                }else if (data.angle.degree > 240 && data.angle.degree < 290){
                    clearInterval(this.var);
                    this.var = setInterval(function () {
                        console.log('down');
                        socket.emit('turn', data.angle.degree);
                    }, 400);
                }

                /*

                else if (data.angle.degree > 0 && data.angle.degree < 67.5){
                    clearInterval(this.var);
                    this.var = setInterval(function () {
                        console.log('right-up');
                        socket.emit('turn', 225);

                    }, 400);
                }else if (data.angle.degree > 135 && data.angle.degree < 202.5){
                    clearInterval(this.var);
                    this.var = setInterval(function () {
                        console.log('left-up');
                        socket.emit('turn', 135);

                    }, 400);
                }else if (data.angle.degree > 202.5 && data.angle.degree < 240){
                    clearInterval(this.var);
                    this.var = setInterval(function () {
                        console.log('left-down');
                        socket.emit('turn', 45);
                    }, 400);
                }else if (data.angle.degree > 240 && data.angle.degree < 290){
                        clearInterval(this.var);
                        this.var = setInterval(function () {
                            console.log('down');
                            socket.emit('turn', 0);
                        }, 400);
                }else if (data.angle.degree > 290 && data.angle.degree < 359.9){
                    clearInterval(this.var);
                    this.var = setInterval(function () {
                        console.log('right-down');
                        socket.emit('turn', 315);
                    }, 400);
                }
                */
            });
            nipple.on('end', function(evt) {
                console.log("end");
                clearInterval(this.var);
                socket.emit('stop');
            });
        });
    };

    render() {
        return(<div />);
    }
}

export default Joystick;
