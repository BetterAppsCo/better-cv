import React from "react";
import { LandingPage } from "../pages/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "./Dashboard";
import { Profile } from "./Profile";
import { Login } from "./Login";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/app" Component={Dashboard} />
          <Route path="/profile" Component={Profile} />
          <Route path="/login" Component={Login} />
          <Route path="*" Component={LandingPage} />
        </Routes>
      </QueryClientProvider>
    </Router>
  );
};
