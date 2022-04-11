export default function EmployeeDetailComponent(props) {
    return (
        <>
            <div class="card" style={{width: "300px", padding: "10px", margin: "10px", display: "inline-block" }}>
                <div className="card-body">
                    <h5 className="card-title">{props.employee.name} {props.employee.id}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <input type="button" data-username={props.employee.name} data-userid={props.employee.id} className="btn btn-primary" value="Delete" onClick={props.alertUser}  />
                </div>
            </div>
        </>
    )
}