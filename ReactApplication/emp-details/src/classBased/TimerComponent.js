import React from 'react';

export default class TimerComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: this.getDate()
        }

        setInterval(() => {
            this.setState({
                counter: this.getDate()
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
                <ShowCounterAgain counter={this.state.counter}></ShowCounterAgain>
            </>
        )
    }
}

function ShowCounterAgain(props) {
    return <h1>The timer is {props.counter}</h1>
}