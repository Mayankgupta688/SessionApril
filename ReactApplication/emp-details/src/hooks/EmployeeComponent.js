import Axios from "axios";
import React, { useState, useEffect } from "react"; 

export default function EmployeeComponent() {
    var [employeeList, setEmployeeList] = useState([]);
    var [time, setTime] = useState(getDate());


    function getDate() {
        return new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
    }

    
    setTimeout(() => {
        var newDate = getDate()
        setTime(newDate);
        console.log(newDate)
    }, 1000);

    // Component Did Mount
    useEffect(() => {
        debugger;
        Axios.get("https://5a530e1477e1d20012fa066a.mockapi.io/login").then((response) => {
            setEmployeeList(response.data)
        })
    }, [])

    
    useEffect(() => {
        debugger;
        console.log("UseState Called Again....")
    })

    useEffect(() => {
        debugger;
        console.log("UseState Called Again time....")
    }, [time])

    useEffect(() => {
        debugger;
        console.log("UseState Called Again employeeList....")
    }, [employeeList])


    useEffect(() => {
        debugger;
        console.log("UseState Called Again employeeList time....")
    }, [employeeList, time])

    debugger;

    return (
        <>
            <h1>Current Time is {time}</h1>
            <h1>List of Employees is Given Below: </h1>
            {employeeList.map((employee) => {
                return (
                    <div key={employee.id}>
                        <div className="card" style={{width: "300px", padding: "10px", margin: "10px", display: "inline-block" }}>
                            <div className="card-body">
                                <h5 className="card-title">{employee.name}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <input type="button" data-username={employee.name} data-userid={employee.id} className="btn btn-primary" value="Delete" />
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}