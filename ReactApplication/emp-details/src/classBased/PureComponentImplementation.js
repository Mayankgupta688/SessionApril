import React from 'react';

export default class PureComponentImplementation extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            counter: 1
        } 
    }

    componentDidMount() {
        debugger;
        setInterval(() => {
            this.setState({
                counter: 1
            })
        }, 1000)
    }

    render() {
        debugger;
        return <h1>Counter value is: {this.state.counter}</h1>
    }
}