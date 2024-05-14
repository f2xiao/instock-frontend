import "./InventoryAddPage.scss";
import React, { useEffect, useState } from "react";
import returnIcon from "../../assets/icons/arrow_back-24px.svg";
import axios from "axios";
import InventoryForm from "../../components/InventoryForm/InventoryForm";
import { useNavigate } from "react-router-dom";

const InventoryAddPage = () => {
  const navigate = useNavigate();
  const [warehouseList, setWarehouseList] = useState([]);

  const fetchWarehouseList = async () => {
    try {
      const response = await axios.get(`${process.env.API_URL}/api/warehouses`);
      if (response.status === 200) {
        setWarehouseList(response.data);
      }
    } catch (error) {
      console.log("Error while fetch warehouse list");
    }
  };

  const handleBackClick = () => {
    navigate("/inventories");
  };

  useEffect(() => {
    fetchWarehouseList();
  }, []);

  return (
    <>
      <h1 className="add__title">
        <img
          className="add__return"
          src={returnIcon}
          onClick={handleBackClick}
          alt="return to the main page"
        />
        Add New Inventory Item
      </h1>
      <InventoryForm
        action="Add"
        warehouseList={warehouseList}
        handleBackClick={handleBackClick}
      />
    </>
  );
};

export default InventoryAddPage;
