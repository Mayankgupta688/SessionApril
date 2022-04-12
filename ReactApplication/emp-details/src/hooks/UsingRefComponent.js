import { useRef } from "react";

export default function UsingRefComponent() {

    var domObject = useRef();

    function changeColor() {
        for(var i = 0; i< 10000; i++) {
            domObject.current.innerHTML = i;
        }
        
    }

    return (
        <>
            <h1 ref={domObject}>This is the Header Component</h1>
            <input type="button" value="Change Color" onClick={changeColor} />
        </>
    )
}