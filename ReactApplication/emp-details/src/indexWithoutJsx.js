import ReactDOM from "react-dom";
import { createElement } from "react";

ReactDOM.render(
    createElement("section", {}, [
        createElement("div", {}, 
            createElement("h1", {}, "This is Sample Code")
        ), createElement("section", {}, [
            createElement("h2", {}, "This is Another Example"),
            createElement("h3", {}, "This is without JSX"),
            createElement("div", {}, createElement("h3", {}, "This is the End")),

        ])
    ])
, document.getElementById("root"));



// <section>
//     <div>
//         <h1>This is Sample Code</h1>
//     </div>
//     <p>
//         <section>
//             <h2>This is Another Element</h2>
//             <h3>This is without JSX</h3>
//             <div>
//                 <h3>This is the End</h3>
//             </div>
//         </section>
//     </p>
// </section>