import React from "react";
import "./main.css";

import Header from "./components/header.jsx";
import Banner from "./components/banner.jsx";
import Footer from "./components/footer.jsx";
import Login from "./components/login.jsx";

export default function Main() {
  return (
    <div className="main">
      <Header />
      <Banner />
      <Footer />
      {/* <Login/> */}
    </div>
  );
}