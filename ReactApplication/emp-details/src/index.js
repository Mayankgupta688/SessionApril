import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Component from "./singlePageArchitecture/MainComponent";

ReactDOM.render((
    <BrowserRouter>
        <Component></Component>
    </BrowserRouter>
), document.getElementById("root"));


