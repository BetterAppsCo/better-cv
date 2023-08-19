import React from "react";
import { LandingPage } from "../pages/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Profile } from "./Profile";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/app" Component={Home} />
        <Route path="/profile" Component={Profile} />
        <Route path="*" Component={LandingPage} />
      </Routes>
    </Router>
  );
};
