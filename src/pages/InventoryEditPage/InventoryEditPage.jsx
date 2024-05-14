import "./InventoryEditPage.scss";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import InventoryForm from "../../components/InventoryForm/InventoryForm";

const InventoryEditPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [warehouseList, setWarehouseList] = useState([]);

  const fetchWarehouseList = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/warehouses`
      );
      if (response.status === 200) {
        setWarehouseList(response.data);
      }
    } catch (error) {
      console.log("Error while fetch warehouse list");
    }
  };

  useEffect(() => {
    fetchWarehouseList();
  }, []);

  const handleBackClick = () => {
    navigate("/inventories");
  };

  return (
    <>
      <h1 className="add__title">
        <img
          className="add__return"
          src={backArrow}
          onClick={handleBackClick}
          alt="return to the main page"
        />
        Edit Inventory Item
      </h1>
      <InventoryForm
        id={id}
        action="Edit"
        warehouseList={warehouseList}
        handleBackClick={handleBackClick}
      />
    </>
  );
};

export default InventoryEditPage;
