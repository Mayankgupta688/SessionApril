export default function InterpolateComponent(props) {

    props.employee.userName = "TechnoFunnel";

    function getTime() {
        return "Time is: " + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
    }
    
    return <h1>{ getTime() } for User = {props.employee.userName + " Gupta"} Age is: {props.userAge}</h1>
}