export default function employeeReducer(store = [], action) {
    debugger;
    if(action.type === "ADD_EMPLOYEES") {
        return action.payload;
    }

    if(action.type === "DELETE_EMPLOYEES") {
        return [];
    }

    return store;
}