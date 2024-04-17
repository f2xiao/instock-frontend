import "./WarehouseDetails.scss"

const WarehouseDetails=()=>{

    return(
        <>
            <div className='details_top'>
                <h1 className='details__title'>{warehouse.warehouse_name}</h1>
                <Link><div className='details_edit'> EDIT
                </div></Link> 
            </div>
            <div className='detail_botton'>
                <div className='detail_address'>
                    <h4>WAREHOUSE ADDRESS:</h4><br />
                    <p2>{warehouse.address},{warehouse.city},{warehouse.country}
                    </p2>
                </div>
                <div>
                    <div className='detail_contact'> 
                        <h4>CONTACT NAME:</h4><br />
                        <p2>{warehouse.contact_name}<br />
                        {warehouse.contact_position}</p2>
                    </div>
                    <div className='detail_info'>
                        <h4>CONTACT INFORMATION:</h4><br />
                        <p2>{warehouse.contact_phone}<br />
                        {warehouse.contact_email}</p2>
                    </div>
                </div>
            </div>
        
        
        </>


    )
};

export default WarehouseDetails;