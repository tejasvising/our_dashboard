// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../src/components/Profile/Dashboard";
import CreateNewGraph from "./components/Profile/CreateNewGraph";
import GraphDetails from "./components/Profile/GraphDetails";
import AccountSettings from "./components/Profile/AccountSettings";
import PricingPage from "./components/Pricing/PricingPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create-new-graph" element={<CreateNewGraph />} />
        <Route path="/graph-details" element={<GraphDetails />} />
        <Route path="/account-settings" element={<AccountSettings />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
