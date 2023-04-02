import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = (
  <h1 id="heading" className="head">
    Hello from JSX
  </h1>
);

//  jsx -> createElement -> object -> HTML tag [babel]

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
