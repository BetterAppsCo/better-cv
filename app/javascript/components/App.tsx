import { LandingPage } from "../pages/Landing";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Home";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/app" Component={Home} />
        <Route path="*" Component={LandingPage} />
      </Routes>
    </Router>
  );
};
