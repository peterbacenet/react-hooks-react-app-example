import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));
//ReactDOM is a npm package which takes in 2 arguments, the high level React Component, in this case "App /" and WHERE we want the component to be rendered, a div with the ID of root
//ReactDOM.render() will always be used in every application. 