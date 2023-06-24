import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Home } from "./Home";

export const App = () => {
  return (
    <Router>
      <Home />
    </Router>
  );
};
