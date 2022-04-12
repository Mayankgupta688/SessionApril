import { useState, createContext, useContext } from "react";

export var appContext = createContext()

export default function GrandParent() {
    var [details, setDetails] = useState({
        village: "Haryana",
        surName: "Gupta"
    })

    return (
        <appContext.Provider value={{details: details, setDetails: setDetails}}>
            <h1>Data from Grand Parent {details.village}</h1><br/><hr/>
            <Parent></Parent>
        </appContext.Provider>
    )
}

function Parent() {

    return (
        <>
            <h1>This is Component From Parent</h1><br/><hr/>
            <ChildComponent></ChildComponent>
        </>
    )
}

function ChildComponent() {

    return (
        <>
            <h1>This is Component From Child</h1><br/><hr/>
            <GrandChildComponent></GrandChildComponent>
        </>
    )
}

function GrandChildComponent() {
    var data = useContext(appContext);
    
    function changeData() {
        data.setDetails({
            village: "MP",
            surName: "Gupta"
        })
    }
    

    debugger;
    return (
        <>
            <h1>This is Component From Grand Child {data.details.village}</h1>
            <input type="button" value="Update Data" onClick={changeData} /><br/><hr/>
        </>
    )
}