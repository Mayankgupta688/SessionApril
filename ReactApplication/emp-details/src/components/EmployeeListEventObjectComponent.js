import React from "react";
import "../styles/headers.css"; 

export default function EmployeeListEventObjectComponent() {
    
    var employeeList = [
        {"id":"26","createdAt":"2019-07-09T18:08:17.841Z","name":"Mayank Metz","avatar":"https://tse3.mm.bing.net/th?id=OIP.snBqTc38-h2IJPHC7UzvXgHaE8&pid=Api&P=0&w=249&h=166"},
        {"id":"27","createdAt":"2019-07-09T20:32:28.258Z","name":"Anshul Windler PhD","avatar":"https://tse3.mm.bing.net/th?id=OIP.snBqTc38-h2IJPHC7UzvXgHaE8&pid=Api&P=0&w=249&h=166"},
        {"id":"29","createdAt":"2019-07-10T03:43:08.857Z","name":"Kenya Reichel","avatar":"https://tse3.mm.bing.net/th?id=OIP.snBqTc38-h2IJPHC7UzvXgHaE8&pid=Api&P=0&w=249&h=166"},
        {"id":"30","createdAt":"2019-07-09T18:06:41.721Z","name":"Edmund Fisher","avatar":"https://tse3.mm.bing.net/th?id=OIP.snBqTc38-h2IJPHC7UzvXgHaE8&pid=Api&P=0&w=249&h=166"},
        {"id":"31","createdAt":"2019-07-09T11:44:07.092Z","name":"Lenora Price","avatar":"https://tse3.mm.bing.net/th?id=OIP.snBqTc38-h2IJPHC7UzvXgHaE8&pid=Api&P=0&w=249&h=166"},
        {"id":"32","createdAt":"2019-07-09T20:56:58.884Z","name":"Clementina Sanford","avatar":"https://tse3.mm.bing.net/th?id=OIP.snBqTc38-h2IJPHC7UzvXgHaE8&pid=Api&P=0&w=249&h=166"},
        {"id":"33","createdAt":"2019-07-10T07:56:08.182Z","name":"Willow Windler","avatar":"https://tse3.mm.bing.net/th?id=OIP.snBqTc38-h2IJPHC7UzvXgHaE8&pid=Api&P=0&w=249&h=166"}
    ];

    var cardStyle = {
        width: "400px",
        padding: "10px",
        margin: "10px",
        display: "inline-block"
    }

    function alertUser(event) {
        alert("Employee Clicked is: " + event.target.dataset.username);
        alert("Employee Clicked is: " + event.target.dataset.userid);
    }
    
    return (
        <>
            {employeeList.map(function(employee) {
                return (
                    <React.Fragment>
                        <div class="card" style={{width: "300px", padding: "10px", margin: "10px", display: "inline-block" }}>
                            <img src={employee.avatar} className="card-img-top" alt={employee.name} />
                            <div className="card-body">
                                <h5 className="card-title">{employee.name}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <input type="button" className="btn btn-primary" value="Delete" />
                            </div>
                        </div>
                    </React.Fragment>
                )
            })}
        </>
    )
}