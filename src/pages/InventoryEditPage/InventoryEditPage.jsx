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
  const categories = [
    { label: 'Electronics', value: 'Electronics' },
    { label: 'Gear', value: 'Gear' },
    { label: 'Apparel', value: 'Apparel' },
    { label: 'Accessories', value: 'Accessories' },
    { label: 'Health', value: 'Health' }];

  const warehouseList = [
    { label: 'Manhattan', value: 'Manhattan' },
    { label: 'Washington', value: 'Washington' },
    { label: 'Jersey', value: 'Jersey' },
    { label: 'SF', value: 'SF' },
    { label: 'Santa Monica', value: 'Santa Monica' },
    { label: 'Seattle', value: 'Seattle' },
    { label: 'Miami', value: 'Miami' }];
  const [value, setValue] = useState('');

  const handleWarehouseChange = (event) => {
    setValue(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setValue(event.target.value);
  };
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
      <div className="inventory-form">
          <div>
            <h2>Item Details</h2>
            <div className="inventory-form__item-details">
              <div>
                <label>Item Name</label><br/>
                <input value={inventoryData.item_name}></input>
              </div>
              <div>
                <label>Dscription</label><br/>
                <textarea value={inventoryData.description}></textarea>
              </div>
              <div>
                <label>Category</label><br/>
                <select value={value} onChange={handleCategoryChange}>
                  {categories.map((category) => (
                    <option value={category.value}>{category.label}</option>
                  ))}</select>
              </div>
            </div>
          </div>
          <div>
            Item Availability
            <div className="inventory-form__item-availability">
              <div>
                <label>Status</label><br/>
                <label><input type='radio' name="status_inStock" value="In Stock" defaultChecked></input>In Stock</label>
                <label><input type='radio' name="status_outOfStock" value="Out of stock"></input>Out of stock</label>
              </div>
              <div>
                <label>Warehouse</label><br/>
                <select value={value} onChange={handleWarehouseChange}>

                  {warehouseList.map((warehouse) => (

                    <option value={warehouse.value}>{warehouse.label}</option>

                  ))}</select>
              </div>
            </div>
          </div>
      </div>
    </div >
  );
};

export default InventoryEditPage;
