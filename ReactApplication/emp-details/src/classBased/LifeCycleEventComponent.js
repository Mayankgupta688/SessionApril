import React from 'react';

export default class LifeCycleEventComponent extends React.Component {
    constructor() {
        debugger;
        super();
        this.state = {
            counterData: 0
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextState.counterData % 2 === 1) {
            return false;
        }
        return true;
    }

    render() {
        debugger
        return (
            <>
                <h2>Counter Value is: {this.state.counterData}</h2>
            </>
        )
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                counterData: this.state.counterData + 1
            })
        }, 1000);
    }

    componentWillUnmount() {
        console.log("Component is getting Destroy...")
    }
}