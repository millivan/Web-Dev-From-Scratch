import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import reportWebVitals from "./unused/reportWebVitals";
import { Card } from "./components/card";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Card />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
