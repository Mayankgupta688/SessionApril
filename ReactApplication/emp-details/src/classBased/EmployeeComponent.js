import React, { Component } from "react";
import EmployeeDetailComponent from "./EmployeeDetailComponent";
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
            });
        })

        this.alertUser = this.alertUser.bind(this)
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
                        <EmployeeDetailComponent employee={employee} alertUser={this.alertUser}></EmployeeDetailComponent>
                    )
                })}
            </>
        )
    }
}