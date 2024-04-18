import "./WarehouseListPage.scss";
import Row from "../../components/Row/Row";
import { useState } from "react";
const WarehouseListPage = () => {
  const [warehouses, setWarehouses] = useState([]);

  return (
    <div>
      <Row />
      <Row />
    </div>
  );
};

export default WarehouseListPage;
