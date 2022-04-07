import React, { Component } from "react";
import Axios from "axios";

export default class EmployeeComponent extends Component {

    constructor() {
        super();
        this.state = {
            employeeList: []
        }

        Axios.get("https://5a530e1477e1d20012fa066a.mockapi.io/login").then((response) => {
            this.setState({
                employeeList: response.data
            })

            // this.state.employeeList = response.data;
            // this.forceUpdate();
        })
    }

    alertUser(event) {
        alert("Employee Clicked is: " + this.employeeList);
    }

    render() {
        debugger;
        return (
            <>
            <h1>List of Employees is Given Below: </h1>
                {this.state.employeeList.map((employee) => {
                    return (
                        <>
                            <div class="card" style={{width: "300px", padding: "10px", margin: "10px", display: "inline-block" }}>
                                <img src={employee.avatar} className="card-img-top" alt={employee.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{employee.name}</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <input type="button" data-username={employee.name} data-userid={employee.id} className="btn btn-primary" value="Delete" onClick={this.alertUser.bind(this)}  />
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        )
    }
}