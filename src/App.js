import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import RestroContainer from "./components/RestroContainer";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <RestroContainer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
