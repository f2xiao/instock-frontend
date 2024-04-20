import "./WarehouseDetails.scss";
import returnIcon from "../../assets/icons/arrow_back-24px.svg";

const WarehouseDetails = ({ warehouse }) => {
  const {
    address,
    city,
    country,
    contact_name,
    contact_position,
    contact_phone,
    contact_email,
  } = warehouse;
  return (
    <ul className="warehouse">
      <li className="warehouse__first">
        <p className="warehouse__title">warehouse address</p>
        <span className="warehouse__address">{`${address} ${city}, ${country}`}</span>
      </li>
      <li className="warehouse__second">
        <p className="warehouse__title">Contact name:</p>
        <span>{contact_name}</span>
        <br />
        <span>{contact_position}</span>
      </li>
      <li className="warehouse__third">
        <p className="warehouse__title">Contact information:</p>
        <span>{contact_phone}</span>
        <br />
        <span>{contact_email}</span>
      </li>
    </ul>
  );
};

export default WarehouseDetails;
