import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./assets/components/header/Header";
import Footer from "./assets/components/footer/Footer";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
