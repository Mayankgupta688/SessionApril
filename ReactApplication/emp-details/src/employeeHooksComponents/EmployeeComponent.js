import React, { Component } from "react";
import EmployeeDetailComponent from "./EmployeeDetailComponent";
import AddEmployeeComponent from "./AddEmployeeComponent";
import FilterComponent from "./FilterComponent";
import Axios from "axios";

export default class EmployeeComponent extends Component {

    constructor() {
        super();
        this.state = {
            employeeList: [],
            filterList: []
        }

        Axios.get("https://5a530e1477e1d20012fa066a.mockapi.io/login").then((response) => {
            this.setState({
                employeeList: response.data,
                filterList: response.data
            });
        })

        this.alertUser = this.alertUser.bind(this)
    }

    addEmployee = (newEmployeeData) => {

        Axios.post("https://5a530e1477e1d20012fa066a.mockapi.io/login", newEmployeeData).then(() => {
            Axios.get("https://5a530e1477e1d20012fa066a.mockapi.io/login").then((response) => {
                this.setState({
                    employeeList: response.data,
                    filterList: response.data
                });
            })     
        })
        
    }

    filterUpdated = (updatedValue) => {
        var filtedData = this.state.employeeList.filter((employee) => {
            if(employee.name.indexOf(updatedValue) > -1) {
                return true;
            }

            return false;
        })

        this.setState({
            ...this.state,
            filterList: filtedData
        })
    }

    alertUser(event) {
        alert("Employee Clicked is: " + this.employeeList);
    }

    render() {
        debugger;
        return (
            <div style={{"padding": "15px", margin: "15px"}}>
                <FilterComponent filterUpdated={this.filterUpdated}></FilterComponent><br/><hr/>
                <AddEmployeeComponent addEmployee={this.addEmployee}></AddEmployeeComponent><br/><hr/>
                <h1>List of Employees is Given Below: </h1>
                {this.state.filterList.map((employee) => {
                    return (
                        <EmployeeDetailComponent employee={employee} alertUser={this.alertUser}></EmployeeDetailComponent>
                    )
                })}
            </div>
        )
    }
}