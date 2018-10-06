import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import Main from "../src/Main/Main";
import registerServiceWorker from "./registerServiceWorker";
import store from "../src/State/Store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={Main} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
