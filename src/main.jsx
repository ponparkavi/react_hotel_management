import "./main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header.jsx";
import Banner from "./components/banner.jsx";
import Footer from "./components/footer.jsx";
import Login from "./components/login.jsx";
import Help from "./components/help.jsx";
import Contact from "./components/contact.jsx";
import About from "./components/about.jsx";

export default function Main() {
  return (
    <div className="main">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Login />} />
          <Route path="/help" element={<Help />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ab" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
