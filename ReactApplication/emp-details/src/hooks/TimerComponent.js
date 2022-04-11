import React, {useEffect, useState} from "react";

export default function TimerComponent() {


    debugger;
    function getDate() {
        return new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
    }

    var [time, setTime] = useState(getDate());

    useEffect(() => {
        console.log("ComponentDidMount")
    }, [])

    useEffect(() => {
        console.log("ComponentDidUpdate")
    }, [time]);
    
    useEffect(() => {
        console.log("ComponentDidUpdate")
    })

    setTimeout(() => {
        var newDate = getDate()
        setTime(newDate);
        console.log(newDate)
    }, 1000);

    return( 
        <div>
            <h1>The Time is is {time}</h1>
        </div>
    );
}