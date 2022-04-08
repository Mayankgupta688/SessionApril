import React from 'react';

export default class TimerComponentUpdated extends React.Component {
    constructor() {
        super();
        this.state = {
            counterData: 0
        }

        
    }

    buttonClick = () => {

        debugger;

        this.setState({
            counterData: this.state.counterData + 1
        }, () => {
            this.setState({
                counterData: this.state.counterData + 1
            }, () => {
                this.setState({
                    counterData: this.state.counterData + 1
                }, () => {
                    alert("Done")
                })
            })
        })

        
    }

    render() {
        debugger
        return (
            <>
                <h2>Counter Value is: {this.state.counterData}</h2>
                <input type="button" onClick={this.buttonClick} value="Click" />
            </>
        )
    }
}