import "./App.scss";
import WarehouseListPage from "./pages/WarehouseListPage/WarehouseListPage.jsx";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage.jsx";
import WarehouseEditPage from "./pages/WarehouseEditPage/WarehouseEditPage.jsx";
import InventoryListPage from "./pages/InventoryListPage/InventoryListPage.jsx";
import InventoryDetailsPage from "./pages/InventoryDetailsPage/InventoryDetailsPage.jsx";
import InventoryEditPage from "./pages/InventoryEditPage/InventoryEditPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter className="app">
      <Routes>
        <Route path="/" element={<WarehouseListPage />} />
        <Route path="warehouses" element={<WarehouseListPage />} />
        <Route path="warehouses/:id" element={<WarehouseDetailsPage />} />
        <Route path="warehouses/:id/edit" element={<WarehouseEditPage />} />
        <Route path="inventories" element={<InventoryListPage />} />
        <Route path="inventories/:id" element={<InventoryDetailsPage />} />
        <Route path="inventories/:id/edit" element={<InventoryEditPage />} />
        <Route path="*" element={<div>Not Found 404 🥲</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
