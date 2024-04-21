import "./InventoryAddPage.scss";
import React, { useState } from 'react';
import returnIcon from'../../assets/icons/arrow_back-24px.svg'

const InventoryAddPage = () => {
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [status, setStatus] = useState('in_stock');
  const [quantity, setQuantity] = useState(0);
  const [warehouse, setWarehouse] = useState('');

  const handleChange = (event) => {
      // Handle changes in input fields
      const { name, value } = event.target;
      switch (name) {
          case 'itemName':
              setItemName(value);
              break;
          case 'description':
              setDescription(value);
              break;
          case 'category':
              setCategory(value);
              break;
          case 'status':
              setStatus(value);
              break;
          case 'quantity':
              setQuantity(value);
              break;
          case 'warehouse':
              setWarehouse(value);
              break;
          default:
              break;
      }
  };

  const handleSubmit = (event) => {
      event.preventDefault();
      // Logic to handle form submission, e.g., send data to server
  };

  return (
    <>
      <h1 className='add__title'>
        <img className='add__return' src={returnIcon} alt="return to the main page" />
        Add New Inventory Item
      </h1>
      <form className='add__form' onSubmit={handleSubmit}>
        <div className="add__wrapper">
          <section className='add__section add__section1'>
            <h2 className='add__sectiontitle'>Item Details</h2>
            <div>
              <label>Item Name</label><br />
              <input
                type="text"
                name="itemName"
                value={itemName}
                onChange={handleChange}
                placeholder="Item Name"
              />
            </div>
            <div>
              <label>Description</label><br />
              <textarea
                type="text"
                name="description"
                value={description}
                className="add__description"
                onChange={handleChange}
                placeholder="Please enter a brief item description"
              />
            </div>
            <div>
              <div>
                <label htmlFor="category">Category</label><br />
                <div className="add_arrow">
                  <select
                    id="category"
                    name="category"
                    className="add__category"
                    value={category}
                    onChange={handleChange}
                  >
                    <option value="category1">Please Select</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
              </div>
            </div>
          </section>
          <section className='add__section'>
            <h2 className='add__sectiontitle'>Item Availability</h2>
            <label>Status
              <div className='add__select'>
                <input
                  type="radio"
                  name="status"
                  value="in_stock"
                  className="add_radio"
                  checked={status === 'in_stock'}
                  onChange={handleChange}
                />In Stock

                <input
                  type="radio"
                  name="status"
                  className="add_radio add_radio1"
                  value="out_of_stock"
                  checked={status === 'out_of_stock'}
                  onChange={handleChange}
                /> Out of Stock
              </div>
            </label>
            <div>
              <label>Quantity</label><br />
              <input
                type="text"
                name="quantity"
                value={quantity}
                onChange={handleChange}
                placeholder="0"
              />
            </div>
            <div>
              <label>Warehouse</label><br />
              <div className="custom-select">
                <select
                  name="warehouse"
                  value={warehouse}
                  className="add__category"
                  onChange={handleChange}
                >
                  <option value="warehouse1">Warehouse</option>
                  <option value="warehoue id">Please add logic here</option>
                  <option value="warehoue id">Please add logic here</option>
                  <option value="warehoue id">Please add logic here</option>
                  <option value="warehoue id">Please add logic here</option>
                  <option value="warehoue id">Please add logic here</option>
                  <div>
                    <label>Warehouse</label><br />
                    <div className="add__arrow">
                      <select
                        name="warehouse"
                        value={warehouse}
                        className="add__category"
                        onChange={handleChange}
                      >
                        <option value="warehouse1">Warehouse</option>
                        <option value="warehouse2">{ }</option>
                      </select>
                    </div>
                  </div>
                </select>
              </div>
            </div>
          </section>
        </div>
        <div className="add__buttons">
          <button className="add__cancel" type="button"><h3>Cancel</h3></button>
          <button className="add__save" type="submit"><h3>+ Add item</h3></button>
        </div>
      </form>
    </>
  );
};

export default InventoryAddPage;
