import React, { useState } from "react";

export default function CounterComponent() {
    var [counter, setCounter] = useState(0);
    var [time, setTime] = useState(getDate());

    function getDate() {
        return new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
    }

    debugger;

    function incrementCounter() {
        setCounter(counter + 1)
    }

    setTimeout(() => {
        var newDate = getDate()
        setTime(newDate);
        console.log(newDate)
    }, 1000);

    return (
        <div>
            <h1>The Counter value is {counter}</h1>
            <h1>The Time is is {time}</h1>
            <input type="button" onClick={incrementCounter} value="Add Counter" />
        </div>
    )
}