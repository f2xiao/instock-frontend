import "./WarehouseDetailsPage.scss";
import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import PageTitle from "../../components/PageTitle/PageTitle";
import Table from "../../components/Table/Table";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const WarehouseDetailsPage = () => {
  const { id } = useParams();
  const [warehouse, setWarehouse] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const fetchWarehouse = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/warehouses/${id}`
        );
        console.log(response.data);
        setWarehouse(response.data);
        setIsFetching(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchWarehouse();
  }, [id]);

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
        <PageTitle
          title={warehouse.warehouse_name}
          backLink="/warehouses"
          editLink={`/warehouses/${id}/edit`}
        />
        <WarehouseDetails warehouse={warehouse} />
      </div>
      <div className="warehouse-details-page__inventories">
        <Table
          type="inventories"
          headers={headers}
          warehouseInventories={true}
          id={id}
        />
      </div>
    </div>
  );
};

export default WarehouseDetailsPage;
