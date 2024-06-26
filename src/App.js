import "./App.scss";
import { useRef, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import WarehouseListPage from "./pages/WarehouseListPage/WarehouseListPage.jsx";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage.jsx";
import WarehouseEditPage from "./pages/WarehouseEditPage/WarehouseEditPage.jsx";
import WarehouseAddPage from "./pages/WarehouseAddPage/WarehouseAddPage.jsx";

import InventoryListPage from "./pages/InventoryListPage/InventoryListPage.jsx";
import InventoryDetailsPage from "./pages/InventoryDetailsPage/InventoryDetailsPage.jsx";
import InventoryEditPage from "./pages/InventoryEditPage/InventoryEditPage.jsx";
import InventoryAddPage from "./pages/InventoryAddPage/InventoryAddPage.jsx";

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current) {
      console.log("Height:", elementRef.current.clientHeight);
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="app" ref={elementRef}>
        <Header />
        <div className="app__main">
          <Routes>
            <Route path="/" element={<WarehouseListPage />} />
            <Route path="warehouses" element={<WarehouseListPage />} />
            <Route path="warehouses/:id" element={<WarehouseDetailsPage />} />
            <Route path="warehouses/:id/edit" element={<WarehouseEditPage />} />
            <Route path="warehouses/add" element={<WarehouseAddPage />} />
            <Route path="inventories" element={<InventoryListPage />} />
            <Route path="inventories/:id" element={<InventoryDetailsPage />} />
            <Route
              path="inventories/:id/edit"
              element={<InventoryEditPage />}
            />
            <Route path="inventories/add" element={<InventoryAddPage />} />
            <Route path="*" element={<div>Not Found 404 🥲</div>} />
          </Routes>
        </div>
        <div className="app__empty">&nbsp;</div>
        <footer className="app__footer">
          Coded by &nbsp;<a href="https://github.com/f2xiao">f2xiao</a>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
