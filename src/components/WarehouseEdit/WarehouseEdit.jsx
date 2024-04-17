import "./WarehouseEdit.scss"
import React, { useState } from 'react';
import warehouseData from"../../data/01_warehouses.json"

    const WarehouseEdit=()=>{
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
        <div>
            <h2>Edit Warehouse</h2>

            <form onSubmit={handleSubmit}>
                <section>
                    <h3>Warehouse Details</h3>
                    <input
                        type="text"
                        name="warehouseName"
                        placeholder="Warehouse Name"
                        value={warehouseDetails.warehouseName}
                        onChange={handleWarehouseChange}
                    />
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={warehouseDetails.address}
                        onChange={handleWarehouseChange}
                    />
                    <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={warehouseDetails.city}
                        onChange={handleWarehouseChange}
                    />
                    <input
                        type="text"
                        name="country"
                        placeholder="Country"
                        value={warehouseDetails.country}
                        onChange={handleWarehouseChange}
                    />
                </section>

                <section>
                    <h3>Contact Details</h3>
                    <input
                        type="text"
                        name="contactName"
                        placeholder="Contact Name"
                        value={contactDetails.contactName}
                        onChange={handleContactChange}
                    />
                    <input
                        type="text"
                        name="contactPosition"
                        placeholder="Contact Position"
                        value={contactDetails.contactPosition}
                        onChange={handleContactChange}
                    />
                    <input
                        type="text"
                        name="contactPhone"
                        placeholder="Contact Phone"
                        value={contactDetails.contactPhone}
                        onChange={handleContactChange}
                    />
                    <input
                        type="text"
                        name="contactEmail"
                        placeholder="Contact Email"
                        value={contactDetails.contactEmail}
                        onChange={handleContactChange}
                    />
                </section>
                <button type="submit">Cancel</button>
                <button type="submit">Save</button>
            </form>
        </div>
    );
};


export default WarehouseEdit;