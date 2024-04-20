import "./WarehouseDetailsPage.scss";
import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import DeatilsHeader from "../../components/DetailsHeader/DetailsHeader";
import Table from "../../components/Table/Table";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../../utils/api";

const WarehouseDetailsPage = () => {
  const { id } = useParams();
  const [warehouse, setWarehouse] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const fetchWarehouse = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/warehouses/${id}`);
        console.log(response.data);
        setWarehouse(response.data);
        setIsFetching(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchWarehouse();
  }, []);

  if (isFetching) {
    return (
      <p className="warehouse-details-page__wrapper">
        ... Loading warehouse data ...
      </p>
    );
  }

  const headers = ["inventory item", "category", "Status", "Qty"];

  return (
    <div className="warehouse-details-page">
      <div className="warehouse-details-page__info">
        <DeatilsHeader title={warehouse.warehouse_name} linkUrl="/warehouses" />
        <WarehouseDetails warehouse={warehouse} />
      </div>
      <Table
        type="inventories"
        headers={headers}
        warehouseInventories
        id={id}
      />
    </div>
  );
};

export default WarehouseDetailsPage;
