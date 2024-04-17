import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../../utils/api";
import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import "./WarehouseDetailsPage.scss";

const WarehouseDetailsPage = () => {
  const { id } = useParams();
  const [warehouse, setWarehouse] = useState(null);

  useEffect(() => {
    const fetchWarehouse = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/warehouses/${id}`);
        // console.log(response.data);
        setWarehouse(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchWarehouse();
  }, []);

  if (!warehouse) {
    return <p>... Loading video details ...</p>;
  }
  return (
    <main>
      <WarehouseDetails warehouse={warehouse} />
    </main>
  );
};

export default WarehouseDetailsPage;
