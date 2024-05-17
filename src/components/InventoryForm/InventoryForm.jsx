import "./InventoryForm.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const InventoryForm = ({ id, action, warehouseList, handleBackClick }) => {
  const navigate = useNavigate();

  const categories = [
    { label: "Electronics", value: "Electronics" },
    { label: "Gear", value: "Gear" },
    { label: "Apparel", value: "Apparel" },
    { label: "Accessories", value: "Accessories" },
    { label: "Health", value: "Health" },
  ];

  const [inventoryDetails, setInventoryDetails] = useState({
    item_name: "",
    description: "",
    category: "",
    status: "In Stock",
    quantity: 0,
    warehouse_id: undefined,
  });

  const [formErrors, setFormErrors] = useState({
    item_name: false,
    description: false,
    category: false,
    status: false,
    quantity: false,
    warehouse_id: false,
  });

  const handleInventoryChange = (event) => {
    const { name, value } = event.target;

    setInventoryDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setFormErrors({
      ...formErrors,
      [name]: value ? false : true,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newFormErrors = {};
    for (const key in inventoryDetails) {
      if (inventoryDetails[key] === "") {
        newFormErrors[key] = true;
      } else {
        newFormErrors[key] = false;
      }
    }
    setFormErrors(newFormErrors);

    const addInventory = async () => {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/inventories`,
          inventoryDetails
        );
        return response.data;
      } catch (error) {
        console.log("Failed to add new Inventory");
        return null;
      }
    };
    const updateInventory = async () => {
      try {
        const response = await axios.put(
          `${process.env.REACT_APP_API_URL}/api/inventories/${id}`,
          inventoryDetails
        );
        return response.data;
      } catch (error) {
        console.log(`Failed to update Inventory for ${id}`);
        return null;
      }
    };

    const hasErrors = Object.values(newFormErrors).some((error) => error);
    if (!hasErrors) {
      let returnedInventory;
      try {
        if (inventoryDetails.warehouse_id) {
          inventoryDetails.warehouse_id = parseInt(
            inventoryDetails.warehouse_id
          );
        }
        if (inventoryDetails.status === "Out of Stock") {
          inventoryDetails.quantity = 0;
        }
        if (!id) {
          returnedInventory = await addInventory();
        } else {
          returnedInventory = await updateInventory();
        }
        if (returnedInventory) {
          navigate(`/inventories`);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const fetchInventory = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/inventories/${id}`
      );
      const {
        item_name,
        description,
        category,
        status,
        quantity,
        warehouse_id,
      } = response.data;
      setInventoryDetails({
        item_name,
        description,
        category,
        status,
        quantity,
        warehouse_id,
      });
    } catch (error) {
      console.log("Failed to load inventory data");
    }
  };

  useEffect(() => {
    if (id) {
      fetchInventory();
    }
  }, [id]);

  return (
    <form className="add__form" onSubmit={handleSubmit}>
      <div className="add__wrapper">
        <section className="add__section add__section1">
          <h2 className="add__sectiontitle">Item Details</h2>
          <div className="form-field">
            <label>Item Name</label>
            <br />
            <input
              type="text"
              name="item_name"
              value={inventoryDetails.item_name}
              onChange={handleInventoryChange}
              placeholder="Item Name"
              className={
                formErrors.item_name
                  ? "add__input-red add__name-input"
                  : "add__name-input"
              }
            />
            {formErrors.item_name && (
              <p className="add__error">This field is required</p>
            )}
          </div>
          <div className="form-field">
            <label>Description</label>
            <br />
            <textarea
              type="text"
              name="description"
              value={inventoryDetails.description}
              className={
                formErrors.description
                  ? "add__description add__input-red"
                  : "add__description"
              }
              onChange={handleInventoryChange}
              placeholder="Please enter a brief item description"
            />
            {formErrors.description && (
              <p className="add__error">This field is required</p>
            )}
          </div>
          <div>
            <div className="form-field">
              <label htmlFor="category">Category</label>
              <br />
              <div className="add_arrow">
                <select
                  id="category"
                  name="category"
                  className={
                    formErrors.category
                      ? "add__category add__input-red"
                      : "add__category"
                  }
                  value={inventoryDetails.category}
                  onChange={handleInventoryChange}
                >
                  <option value={null} key="-1">
                    Please select
                  </option>
                  {categories.map((category) => (
                    <option value={category.value} key={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
                {formErrors.category && (
                  <p className="add__error">This field is required</p>
                )}
              </div>
            </div>
          </div>
        </section>
        <section className="add__section">
          <h2 className="add__sectiontitle">Item Availability</h2>
          <label>
            Status
            <div className="add__select form-field">
              <input
                type="radio"
                name="status"
                value="In Stock"
                className="add_radio"
                checked={inventoryDetails.status === "In Stock"}
                onChange={handleInventoryChange}
              />
              In Stock
              <input
                type="radio"
                name="status"
                className="add_radio add_radio1"
                value="Out of Stock"
                checked={inventoryDetails.status === "Out of Stock"}
                onChange={handleInventoryChange}
              />{" "}
              Out of Stock
            </div>
          </label>
          {inventoryDetails.status === "In Stock" && (
            <div className="form-field">
              <label>Quantity</label>
              <br />
              <input
                type="number"
                name="quantity"
                value={inventoryDetails.quantity}
                onChange={handleInventoryChange}
                placeholder="0"
                className="add__quantity"
              />
            </div>
          )}
          <div className="form-field">
            <label>Warehouse</label>
            <br />
            <div className="custom-select">
              <select
                name="warehouse_id"
                value={inventoryDetails.warehouse_id}
                className={
                  formErrors.category
                    ? "add__category add__input-red"
                    : "add__category"
                }
                onChange={handleInventoryChange}
              >
                <option value={null} key="-1">
                  Please select
                </option>
                {warehouseList.map((warehouse) => (
                  <option value={warehouse.id} key={warehouse.id}>
                    {warehouse.warehouse_name}
                  </option>
                ))}
              </select>
              {formErrors.warehouse_id && (
                <p className="add__error">This field is required</p>
              )}
            </div>
          </div>
        </section>
      </div>
      <div className="add__buttons">
        <button className="add__cancel" type="button" onClick={handleBackClick}>
          <h3>Cancel</h3>
        </button>
        <button className="add__save" type="submit">
          <h3>{action === "Add" ? "+ Add item" : "Save"}</h3>
        </button>
      </div>
    </form>
  );
};

export default InventoryForm;
