import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Edit from "../../assets/icons/edit-24px.svg";
import Arrow from "../../assets/icons/arrow_back-24px.svg";
import "./InventoryItemDetails.scss";
import { API_URL } from "../../utils/api";

const ItemDetails = () => {
  const [singleItem, setSingleItem] = useState({
    id: "",
    warehouseName: "",
    itemName: "",
    description: "",
    category: "",
    status: "",
    quantity: "",
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/inventories/${id}`);

        setSingleItem(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchItemDetails();
  }, [id]);

  const editItem = () => {
    navigate(`/inventories/${singleItem.id}/edit`);
  };

  const {
    itemName,
    description,
    category,
    status,
    quantity,
    warehouseName: itemWarehouseName,
  } = singleItem;

  return (
    <section className="item-details">
      <div className="item-details__header">
        <Link to="/inventories" className="item-details__header-arrow">
          <img src={Arrow} alt="Back arrow" />
        </Link>
        <h1 className="item-details__header-title">{itemName}</h1>
        <button className="item-details__header-button" onClick={editItem}>
          <img
            className="item-details__header-button-icon"
            src={Edit}
            alt="edit"
          />
          <p className="item-details__header-button-text">Edit</p>
        </button>
      </div>
      <div className="item-details__container">
        <div className="item-details__description">
          <h3 className="item-details__description-header">
            ITEM DESCRIPTION:
          </h3>
          <p className="item-details__description-description">{description}</p>
          <h3 className="item-details__description-header">CATEGORY:</h3>
          <p className="item-details__description-description">{category}</p>
        </div>
        <div className="item-details__line"></div>
        <div className="item-details__logistics">
          <div className="item-details__logistics-amount">
            <div className="item-details__logistics-amount-status">
              <h3 className="item-details__logistics-header">STATUS:</h3>
              <p
                className={`item-details__logistics-${status
                  .toLowerCase()
                  .replace(/\s/g, "")}`}
              >
                {status}
              </p>
            </div>
            <div className="item-details__logistics-amount-quantity">
              <h3 className="item-details__logistics-header">QUANTITY:</h3>
              <p className="item-details__logistics-description">{quantity}</p>
            </div>
          </div>
          <div className="item-details__logistics-warehouse">
            <h3 className="item-details__logistics-header">WAREHOUSE:</h3>
            <p className="item-details__logistics-description">
              {itemWarehouseName}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemDetails;
