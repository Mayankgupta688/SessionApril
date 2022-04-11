import React, {useState} from "react";

export default function AddEmployeeComponent(props) {

    var [newEmployeeData, setNewEmployeeData] = useState({
        name: "",
        id: "",
        avatar: "",
        createdAt: ""
    });

    function updateValue(event) {
        if(event.target.value.length > 2) {
            setNewEmployeeData({
                ...newEmployeeData,
                [event.target.id]: event.target.value
            })
        }
    }

    function submitData() {
        props.addEmployee(newEmployeeData);
        setNewEmployeeData({
            name: "",
            id: "",
            avatar: "",
            createdAt: ""
        })
    }

    return (
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Accordion Item #1
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <span style={{"width": "300px", display: "inline-block"}}>Enter Name: </span><input type="text" id="name"     onChange={updateValue} value={newEmployeeData.name}/><br/><br/>
                    <span style={{"width": "300px", display: "inline-block"}}>Enter Id: </span><input type="text" id="id"       onChange={updateValue} value={newEmployeeData.id}/><br/><br/>
                    <span style={{"width": "300px", display: "inline-block"}}>Enter Avatar: </span><input type="text" id="avatar"   onChange={updateValue} value={newEmployeeData.avatar}/><br/><br/>
                    <span style={{"width": "300px", display: "inline-block"}}>Enter CreatedAt: </span><input type="text" id="createdAt"  onChange={updateValue} value={newEmployeeData.createdAt}/><br/><br/>
                    <input type="button" value="Submit" onClick={submitData} />
                </div>
                </div>
            </div>
        </div>
    )
}