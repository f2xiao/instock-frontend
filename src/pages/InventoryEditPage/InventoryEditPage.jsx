import "./InventoryEditPage.scss";
import backArrow from "../../assets/icons/arrow_back-24px.svg"
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../utils/api";

const InventoryEditPage = () => {

  const navigate = useNavigate();
  const { id } = useParams();
  const [inventoryData, setInventoryData] = useState();
  const categories = ['Electronics', 'Gear', 'Apparel', 'Accessories', 'Health'];

  const handleBackClick = () => {
    navigate('/inventories');
  }

  const fetchInventoryData = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/inventories/${id}`);
      if (response.status === 200) {
        setInventoryData(response.data);
      }
    } catch (error) {
      console.log(`Failed to get inventory by ${id}`, error);
    }
  }

  useEffect(() => {
    fetchInventoryData();
  }, [id]);

  if (!inventoryData) {
    return <div>Loading Inventory Details...</div>
  }

  return (
    <div>
      <div>
        <img src={backArrow} onClick={handleBackClick}></img>
        Edit Inventory Item
      </div>
      <div>
        <div>
          Item Details: {inventoryData.item_name}
        </div>
        <div>
          Item Availability
        </div>
      </div>

    </div>
  );
};

export default InventoryEditPage;
