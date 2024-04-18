import React, { useState} from 'react';
import "./WarehouseEdit.scss";
import warehouseData from "../../data/01_warehouses.json";
import returnIcon from'../../assets/icons/arrow_back-24px.svg'

const warehouseDetails=warehouseData[1];

const WarehouseEdit = () => {
    const [warehouseDetails, setWarehouseDetails] = useState({
        warehouseName: warehouseData[1].warehouse_name|| '',
        address: warehouseData[1].address || '',
        city: warehouseData[1].city || '',
        country: warehouseData[1].country || ''
    });


    const [contactDetails, setContactDetails] = useState({
        contactName: warehouseData[1].contact_name || '',
        contactPosition: warehouseData[1].contact_position || '',
        contactPhone: warehouseData[1].contact_phone || '',
        contactEmail: warehouseData[1].contact_email || ''
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
            <h1 className="edit__title"><img className='edit__return' src={returnIcon} alt="return to the main page" />Edit Warehouse</h1>

            <form className='edit__form' onSubmit={handleSubmit}>
                <div className='edit__wrapper'>
                <section className='edit__section edit__section1'>
                    <h2 className='edit__sectiontitle'>Warehouse Details</h2>
                    <div>
                        <label>
                            Warehouse Name
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
                        Street Address</label><br />
                        <input
                            type="text"
                            name="address"
                            value={warehouseDetails.address}
                            onChange={handleWarehouseChange}
                        />
                    </div>


                   <div>
                        <label>
                            City
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
                            Country
                        </label><br />
                        <input
                            type="text"
                            name="country"
                            value={warehouseDetails.country}
                            onChange={handleWarehouseChange}
                        />
                    </div>
                    
                </section>

                <section className='edit__section'>
                    <h2 className='edit__sectiontitle'>Contact Details</h2>

                    <div>
                        <label>
                        Contact Name
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
                           Position
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
                        Email
                        </label><br />
                        <input
                            type="text"
                            name="contactEmail"
                            value={contactDetails.contactEmail}
                            onChange={handleContactChange}
                        />
                    </div>
                </section>
                </div>
                <div className="edit__buttons">
                    <button className="edit__cancel" type="button"><h3>Cancel</h3></button>
                    <button className="edit__save" type="submit"><h3>Save</h3></button>
                </div>
            </form>
        </div>
    );
};

export default WarehouseEdit;