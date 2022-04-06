export default function InterpolateComponent(props) {

    debugger;

    function getTime() {
        return "Time is: " + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
    }
    
    return <h1>{ getTime() } for User = {props.userName + " Gupta"} Age is: {props.userAge}</h1>
}