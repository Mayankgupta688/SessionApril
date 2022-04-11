import React, {useState} from "react";

export default function FilterComponent(props) {
    var [filterText, setFilterText] = useState("");

    function changeText(event) {
        setFilterText(event.target.value);
        props.filterUpdated(event.target.value)
    }

    function getValue() {
        alert(filterText);
    }

    return (
        <div>
            Filter Text: 
            <input type="text" value={filterText} 
                   placeholder="Enter Text to Filter" 
                   onChange={changeText} />
            <input type="button" onClick={getValue} value="Get Text" />
        </div>
    )
}