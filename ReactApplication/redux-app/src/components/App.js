
import Axios from "axios"
import { connect } from "react-redux";
import * as actions from "../actions/employeeActions";

function App(props) {

    
    function getEmployeeData() {
        debugger;
        Axios.get("https://5a530e1477e1d20012fa066a.mockapi.io/login").then((response) => {
            props.addEmployeeList(response.data);
        })
    }

    function deleteAll() {
        props.deleteEmployeeList();
    }

    debugger;

    return (
        <div>

            <input type="button" value="Get Data" onClick={getEmployeeData} />
            <input type="button" value="Delete All" onClick={deleteAll} />
            <>
                {props.employees.map((employee) => {
                    return (
                        <div class="card" style={{width: "300px", padding: "10px", margin: "10px", display: "inline-block" }}>
                            <div className="card-body">
                                <h5 className="card-title">{employee.name}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <input type="button" data-username={employee.name} data-userid={employee.id} className="btn btn-primary" value="Delete" />
                            </div>
                        </div>
                    )
                })}
            </>

            
        </div>
    )
}

function mapPropsToStore(store) {
    return {
        employees: store.employees
    }
}

export default connect(mapPropsToStore, actions)(App)