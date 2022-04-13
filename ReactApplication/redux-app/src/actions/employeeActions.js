export function addEmployeeList(employeeList) {
    debugger;
    return {
        type: "ADD_EMPLOYEES",
        payload: employeeList
    }
}

export function deleteEmployeeList() {
    return {
        type: "DELETE_EMPLOYEES"
    }
}