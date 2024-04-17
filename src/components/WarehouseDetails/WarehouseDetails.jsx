import React from 'react';
import "./WarehouseDetails.scss";
import warehouseData from '../../data/01_warehouses.json'; 
import { Link } from 'react-router-dom';

const WarehouseDetails = () => { 
    const warehouse = warehouseData[1]; 
    return (
        <div>
            <div className='details__top'>
                <h1 className='details__title'>{warehouse.warehouse_name}</h1> 
                <Link to='/edit'>
                    <div className='details__edit'>EDIT</div>
                </Link>
            </div>
            <div className='detail__bottom'>
                <div className='detail__address'>
                    <h4>WAREHOUSE ADDRESS:</h4>
                    <p>{`${warehouse.address}, ${warehouse.city}, ${warehouse.country}`}</p>
                </div>
                <div>
                    <div className='detail__contact'>
                        <h4>CONTACT NAME:</h4>
                        <p>{`${warehouse.contact_name}, ${warehouse.contact_position}`}</p>
                    </div>
                    <div className='detail__info'>
                        <h4>CONTACT INFORMATION:</h4>
                        <p>{`${warehouse.contact_phone}, ${warehouse.contact_email}`}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WarehouseDetails;