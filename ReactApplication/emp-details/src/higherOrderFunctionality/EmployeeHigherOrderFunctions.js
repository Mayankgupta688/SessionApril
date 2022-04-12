import { useState, useEffect } from "react";
import Axios from "axios";
import EmployeeDetailComponent from "../classBased/EmployeeDetailComponent";

function employeeHigherOrderFunction(InputComponent) {
    return function HigherOrderComponent() {
        var [employeeList, setEmployeeList] = useState([])

        useEffect(() => {
            Axios.get("https://5a530e1477e1d20012fa066a.mockapi.io/login").then((response) => {
                setEmployeeList(response.data);
            })
        })

        return (
            <>
                <InputComponent employeeList={employeeList}></InputComponent>
                {employeeList.map((employee) => {
                    return (
                        <>
                            <EmployeeDetailComponent employee={employee}></EmployeeDetailComponent>
                        </>
                    )
                })}
            </>
        )
    }
}

function HrComponent(props) {
    return <h5 style={{color: "red"}}>Employee List for HR {props.employeeList.length}</h5>
}

function ManagerComponent(props) {
    return <h5  style={{color: "green"}}>Employee List for Manager {props.employeeList.length}</h5>
}

export var HrHigherOrderComponent = employeeHigherOrderFunction(HrComponent);
export var ManagerHigherOrderComponent = employeeHigherOrderFunction(ManagerComponent);