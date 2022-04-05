import ReactDOM from "react-dom";
import Component from "./components/InterpolateComponent";

var employee = {
    userName: "Mayank",
    userAge: 20
}

ReactDOM.render((
    <div>
        <Component employee={employee} ></Component>
    </div>
), document.getElementById("root"));


