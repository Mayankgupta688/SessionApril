import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App"
import { createStore } from "redux";
import { Provider} from "react-redux";
import rootReducer from "./reducers/index";

var appStore = createStore(rootReducer);

ReactDOM.render((
    <Provider store={appStore}>
        <App></App>
    </Provider>
), document.getElementById("root"))