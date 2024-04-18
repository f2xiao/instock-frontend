import "./WarehouseAdd.scss"
import React, { useState } from 'react';
import returnIcon from'../../assets/icons/arrow_back-24px.svg'

const WarehouseAdd=()=>{
        const [warehouseDetails, setWarehouseDetails] = useState({
            warehouseName: '',
            address: '',
            city: '',
            country: ''
        });
    
        const [contactDetails, setContactDetails] = useState({
        });
    


    const [error, setError] = useState(false); 
    
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
        <div className="add">
            <h1 className="add__title"><img className='add__return' src={returnIcon} alt="return to the main page" />Add Warehouse</h1>

            <form className='add__form' onSubmit={handleSubmit}>
                <div className='add__wrapper'>
                    <section className='add__section add__section1'>
                        <h2 className='add__sectiontitle'>Warehouse Details</h2>
                        <div>
                            <label>
                                Warehouse Name
                            </label><br />
                            <input
                                type="text"
                                name="warehouseName"
                                value={warehouseDetails.warehouseName}
                                onChange={handleWarehouseChange}
                                placeholder="Warehouse Name"
                                className={error ? 'error' : ''}
                            />
                        </div>

                        <div>
                            <label>
                                Street Address
                            </label><br />
                            <input
                                type="text"
                                name="address"
                                value={warehouseDetails.address}
                                onChange={handleWarehouseChange}
                                placeholder="Street Address"
                                className={error ? 'error' : ''}
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
                                placeholder="City"
                                className={error ? 'error' : ''}
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
                                placeholder="Country"
                                className={error ? 'error' : ''}
                            />
                        </div>
                    </section>

                    <section className='add__section'>
                        <h2 className='add__sectiontitle'>Contact Details</h2>

                        <div>
                            <label>
                                Contact Name
                            </label><br />
                            <input
                                type="text"
                                name="contactName"
                                value={contactDetails.contactName}
                                onChange={handleContactChange}
                                placeholder="Contact Name"
                                className={error ? 'error' : ''}
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
                                placeholder="Position"
                                className={error ? 'error' : ''}
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
                                placeholder="Phone Number"
                                className={error ? 'error' : ''}
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
                                placeholder="Email"
                                className={error ? 'error' : ''}
                            />
                        </div>
                    </section>
                </div>
                <div className="add__buttons">
                    <button className="add__cancel" type="button"><h3>Cancel</h3></button>
                    <button className="add__save" type="submit"><h3>+ Add Warehouse</h3></button>
                </div>
            </form>
        </div>
    );
};
    export default WarehouseAdd;