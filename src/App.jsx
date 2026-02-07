import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Workshops from "./pages/Workshops";
import Careers from "./pages/Careers";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Forgot from "./pages/Forgot";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <Router>
      <Navbar />

      <div>
        <Routes>
          {/* PUBLIC ROUTES */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />

          {/* AUTH ROUTES */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot" element={<Forgot />} />

          {/* 🔒 PROTECTED ROUTE */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}