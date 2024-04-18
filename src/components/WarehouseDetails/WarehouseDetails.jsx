import React from 'react';
import "./WarehouseDetails.scss";
import warehouseData from '../../data/01_warehouses.json'; 
// import { Link } from 'react-router-dom';
import returnIcon from '../../assets/icons/arrow_back-24px.svg'

const WarehouseDetails = () => { 
    const warehouse = warehouseData[1]; 
    return (
        <div className="details">
            <div className='details__top'>
                <h1 className='details__title'>
                    {/* <Link to='/'> */}
                    <img className='details__return' src={returnIcon} alt="return to warehouse list page" />
                    {/* </Link> */}
                    {warehouse.warehouse_name}</h1> 
                {/* <Link to='/edit'> */}
                    <button className='details__edit'><span className='details__noshow'>Edit</span></button>
                {/* </Link> */}
            </div>
            <div className='details__bottom'>
                <div className='details__address'>
                    <h4>WAREHOUSE ADDRESS:</h4>
                    <p>{`${warehouse.address}, ${warehouse.city}, ${warehouse.country}`}</p>
                </div>
                <div className='details__contact'>
                    <div className='details__contacter'>
                        <h4>CONTACT NAME:</h4>
                        <p>{`${warehouse.contact_name},`}<br /> {`${warehouse.contact_position}`}</p>
                    </div>
                    <div className='details__info'>
                        <h4>CONTACT INFORMATION:</h4>
                        <p>{`${warehouse.contact_phone},`}<br /> {`${warehouse.contact_email}`}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WarehouseDetails;