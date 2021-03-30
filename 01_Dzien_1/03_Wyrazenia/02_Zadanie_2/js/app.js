import React from "react";
import ReactDOM from "react-dom";

const year = parseFloat(prompt("Podaj rok urodzenia"));

ReactDOM.render(
  <h1>{new Date().getFullYear() - year}</h1>,
  document.getElementById("app")
);
