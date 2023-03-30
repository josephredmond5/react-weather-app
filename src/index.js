import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import "./styles/App.css";
import App from "./components/App";
import forecast from "./data/forecast.json";

const root = document.querySelector("#root");

ReactDOM.render(
  <React.StrictMode>
    <App location={forecast.location} forecasts={forecast.forecasts} />
  </React.StrictMode>,
  root
);
