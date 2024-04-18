import React, { useState } from 'react';
import "./WarehouseEdit.scss";
import warehouseData from "../../data/01_warehouses.json";

const WarehouseEdit = () => {
    const [warehouseDetails, setWarehouseDetails] = useState({
        warehouseName: '',
        address: '',
        city: '',
        country: ''
    });

    const [contactDetails, setContactDetails] = useState({
        contactName: '',
        contactPosition: '',
        contactPhone: '',
        contactEmail: ''
    });

    const handleWarehouseChange = (event) => {
        const { name, value } = event.target;
        setWarehouseDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleContactChange = (event) => {
        const { name, value } = event.target;
        setContactDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log('Warehouse Details:', warehouseDetails);
        console.log('Contact Details:', contactDetails);
    };

    return (
        <div className="edit">
            <h1>Edit Warehouse</h1>

            <form className='edit__form' onSubmit={handleSubmit}>
                <section>
                    <h2 className='edit__title'>Warehouse Details</h2>

                    <div>
                        <label>
                            Warehouse Name:
                        </label><br />
                        <input
                            type="text"
                            name="warehouseName"
                            value={warehouseDetails.warehouseName}
                            onChange={handleWarehouseChange}
                        />
                    </div>

                    <div>
                        <label>
                        Street Address:</label><br />
                        <input
                            type="text"
                            name="address"
                            value={warehouseDetails.address}
                            onChange={handleWarehouseChange}
                        />
                    </div>


                   <div>
                        <label>
                            City:
                        </label><br />
                        <input
                            type="text"
                            name="city"
                            value={warehouseDetails.city}
                            onChange={handleWarehouseChange}
                        />
                </div>
                    
                    <div>
                        <label>
                            Country:
                        </label><br />
                        <input
                            type="text"
                            name="country"
                            value={warehouseDetails.country}
                            onChange={handleWarehouseChange}
                        />
                    </div>
                    
                </section>

                <section>
                    <h2 className='edit__title'>Contact Details</h2>

                    <div>
                        <label>
                        Contact Name:
                        </label><br />
                        <input
                            type="text"
                            name="contactName"
                            value={contactDetails.contactName}
                            onChange={handleContactChange}
                        />
                    </div>

                    <div>
                        <label>
                           Position:
                        </label><br />
                        <input
                            type="text"
                            name="contactPosition"
                            value={contactDetails.contactPosition}
                            onChange={handleContactChange}
                        />
                    </div>
                    
                    <div>
                        <label>
                        Phone Number
                        </label><br />
                        <input
                            type="text"
                            name="contactPhone"
                            value={contactDetails.contactPhone}
                            onChange={handleContactChange}
                        />
                    </div>
                    
                    <div>
                        <label>
                        Email:
                        </label><br />
                        <input
                            type="text"
                            name="contactEmail"
                            value={contactDetails.contactEmail}
                            onChange={handleContactChange}
                        />
                    </div>
                </section>
                <button type="button">Cancel</button>
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default WarehouseEdit;