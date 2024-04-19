import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import InventoryItemDetails from "./components/InventoryItemDetails/InventoryItemDetails";

function App() {
  return (
    <Router>
      <div className="App">
        instock
        <InventoryItemDetails />
      </div>
    </Router>
  );
}

export default App;
