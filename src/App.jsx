import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Leads from "./pages/Leads";
import LeadDetails from "./pages/LeadDetails";
import Activities from "./pages/Activities";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Pricing from "./pages/Pricing";
import WhyNextGenCRM from "./pages/WhyNextGenCRM";
import Resources from "./pages/Resources";
import About from "./pages/About";
import Help from "./pages/Help";
import ContactSales from "./pages/ContactSales";
import Navbar from "./components/Navbar";
import TestConnection from "./pages/TestConnection";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <Navbar /> {/* <-- Make sure Navbar is rendered */}
        <div className="main-content">
          <Routes>
            <Route path="/test-connection" element={<TestConnection />} />
            <Route path="/" element={<Navigate to="/products" />} />
            <Route path="/products" element={<Products />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/why-nextgen-crm" element={<WhyNextGenCRM />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about" element={<About />} />
            <Route path="/help" element={<Help />} />
            <Route path="/contact-sales" element={<ContactSales />} />
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/lead-details" element={<LeadDetails />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
