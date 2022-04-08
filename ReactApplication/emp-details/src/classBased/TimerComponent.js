import React from 'react';

export default class TimerComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: this.getDate(),
            counterData: 0
        }

        setInterval(() => {
            this.setState({
                counter: this.getDate(),
                counterData: 0
            })

            for(var i = 0; i < 100; i++) {
                this.setState({
                    counter: this.getDate(),
                    counterData: i
                })
            }

            this.setState({
                counter: this.getDate(),
                counterData: 0
            })
        }, 1000);
    }

    getDate() {
        return new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
    }

    render() {
        return (
            <>
                <h1>Current Time is: {this.state.counter}</h1>
                <h2>{this.state.counterData}</h2>
                <ShowCounterAgain counter={this.state.counter}></ShowCounterAgain>
            </>
        )
    }
}

function ShowCounterAgain(props) {
    return <h1>The timer is {props.counter}</h1>
}