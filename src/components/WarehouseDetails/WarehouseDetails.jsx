import "./WarehouseDetails.scss";

const WarehouseDetails = ({ warehouse }) => {
  const {
    address,
    city,
    contact_email,
    contact_name,
    contact_phone,
    contact_position,
    country,
    warehouse_name,
  } = warehouse;

  return (
    <div>
      <h1>{warehouse_name}</h1>
      <p>
        warehouse address:
        <br />
        {`${address}, ${city}, ${country}`}
      </p>
      <p>
        contact name:
        <br />
        {contact_name}
      </p>
      <p>{contact_position}</p>
      <p>
        Contact information: <br /> {contact_phone}
      </p>
      <p>{contact_email}</p>
    </div>
  );
};

export default WarehouseDetails;
