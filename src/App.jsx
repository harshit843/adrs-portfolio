import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Workshops from "./pages/Workshops";
import Careers from "./pages/Careers";
import Gallery from "./pages/Gallery";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <div > 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}