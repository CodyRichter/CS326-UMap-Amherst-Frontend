import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./main.css";
import "./classes.css";
import "./login.css";

async function fetchData() {
  // Loads available classes to select from SQL
  let availableClasses = await fetch(
    "https://cs326-umap-amherst.herokuapp.com/classes",
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    }
  ).then((res) => res.json());
  // Loads available buildings to select from SQL
  let availableBuildings = await fetch(
    "https://cs326-umap-amherst.herokuapp.com//buildings",
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    }
  ).then((res) => res.json());

  ReactDOM.render(
    <React.StrictMode>
      <App
        availableClasses={availableClasses}
        availableBuildings={availableBuildings}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
}

fetchData();
ReactDOM.render(<span>Loading...</span>, document.getElementById("root"));
