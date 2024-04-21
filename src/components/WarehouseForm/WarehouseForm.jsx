import "./WarehouseForm.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../utils/api";
import { Link, useNavigate, useParams } from "react-router-dom";
const WarehouseForm = ({ buttonText, cancelLink }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [warehouseDetails, setWarehouseDetails] = useState({
    warehouse_name: "",
    address: "",
    city: "",
    country: "",
    contact_name: "",
    contact_position: "",
    contact_phone: "",
    contact_email: "",
  });

  const [formErrors, setFormErrors] = useState({
    warehouse_name: false,
    address: false,
    city: false,
    country: false,
    contact_name: false,
    contact_position: false,
    contact_phone: false,
    contact_email: false,
  });

  const labelArr = [
    "Warehouse Name",
    "Street Address",
    "City",
    "Country",
    "Contact Name",
    "Position",
    "Phone Number",
    "Email",
  ];

  const handleWarehouseChange = (event) => {
    const { name, value } = event.target;

    setWarehouseDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setFormErrors({
      ...formErrors,
      [name]: false,
    });
  };

  const formattedPhoneNumber = (phoneNumber) => {
    const result = phoneNumber.split("");
    console.log(phoneNumber);

    return `+1 (${result.slice(0, 3).join("")}) ${result
      .slice(3, 6)
      .join("")}-${result.slice(6).join("")}`;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newFormErrors = {};
    for (const key in warehouseDetails) {
      if (warehouseDetails[key].trim() === "") {
        newFormErrors[key] = true;
      } else {
        newFormErrors[key] = false;
      }
    }
    setFormErrors(newFormErrors);

    const addWarehouse = async () => {
      const response = await axios.post(`${API_URL}/api/warehouses`, {
        ...warehouseDetails,
        contact_phone: formattedPhoneNumber(warehouseDetails.contact_phone),
      });
      return response.data;
    };
    const updateWarehouse = async () => {
      const response = await axios.put(`${API_URL}/api/warehouses/${id}`, {
        ...warehouseDetails,
        contact_phone: formattedPhoneNumber(warehouseDetails.contact_phone),
      });
      return response.data;
    };

    const hasErrors = Object.values(newFormErrors).some((error) => error);
    if (!hasErrors) {
      let returnedWarehouse;
      try {
        if (!id) {
          returnedWarehouse = await addWarehouse();
        } else {
          returnedWarehouse = await updateWarehouse();
        }
        if (returnedWarehouse) {
          navigate(`/warehouses`);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  useEffect(() => {
    const fetchWarehouse = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/warehouses/${id}`);
        console.log(response.data);
        const {
          warehouse_name,
          address,
          city,
          country,
          contact_name,
          contact_position,
          contact_phone,
          contact_email,
        } = response.data;
        setWarehouseDetails({
          warehouse_name,
          address,
          city,
          country,
          contact_name,
          contact_position,
          contact_phone,
          contact_email,
        });
      } catch (error) {
        console.log(error);
      }
    };
    if (id) {
      fetchWarehouse();
    }
  }, [id]);

  return (
    <div className="warehouse-form">
      <form className="warehouse-form__form" onSubmit={handleSubmit}>
        <div className="warehouse-form__wrapper">
          <div className="warehouse-form__body">
            <h2>Warehouse Details</h2>
            {labelArr.slice(0, 4).map((label, index) => (
              <div key={label}>
                <label>{label}</label>
                <br />
                <input
                  type="text"
                  name={Object.keys(warehouseDetails)[index]}
                  value={Object.values(warehouseDetails)[index]}
                  onChange={handleWarehouseChange}
                  placeholder={label}
                  className={
                    formErrors[Object.keys(warehouseDetails)[index]]
                      ? "warehouse-form__input warehouse-form__input--red"
                      : "warehouse-form__input"
                  }
                />
                {formErrors[Object.keys(warehouseDetails)[index]] && (
                  <p className="warehouse-form__error">
                    This field is required
                  </p>
                )}
              </div>
            ))}
          </div>
          <div className="warehouse-form__body warehouse-form__body--second">
            <h2>Contact Details</h2>
            {labelArr.slice(4, 6).map((label, index) => (
              <div key={label}>
                <label>{label}</label>
                <br />
                <input
                  type="text"
                  name={Object.keys(warehouseDetails)[index + 4]}
                  value={Object.values(warehouseDetails)[index + 4]}
                  onChange={handleWarehouseChange}
                  placeholder={label}
                  className={
                    formErrors[Object.keys(warehouseDetails)[index + 4]]
                      ? "warehouse-form__input warehouse-form__input--red"
                      : "warehouse-form__input"
                  }
                />
                {formErrors[Object.keys(warehouseDetails)[index + 4]] && (
                  <p className="warehouse-form__error">
                    This field is required
                  </p>
                )}
              </div>
            ))}
            <div>
              <label>{labelArr[6]}</label>
              <br />
              <input
                type="text"
                name={Object.keys(warehouseDetails)[6]}
                value={Object.values(warehouseDetails)[6]}
                onChange={handleWarehouseChange}
                placeholder={labelArr[6]}
                className={
                  formErrors[Object.keys(warehouseDetails)[6]]
                    ? "warehouse-form__input warehouse-form__input--red"
                    : "warehouse-form__input"
                }
              />
              {formErrors[Object.keys(warehouseDetails)[6]] && (
                <p className="warehouse-form__error">This field is required</p>
              )}
            </div>
            <div>
              <label>{labelArr[7]}</label>
              <br />
              <input
                type="email"
                name={Object.keys(warehouseDetails)[7]}
                value={Object.values(warehouseDetails)[7]}
                onChange={handleWarehouseChange}
                placeholder={labelArr[7]}
                className={
                  formErrors[Object.keys(warehouseDetails)[7]]
                    ? "warehouse-form__input warehouse-form__input--red"
                    : "warehouse-form__input"
                }
              />
              {formErrors[Object.keys(warehouseDetails)[6]] && (
                <p className="warehouse-form__error">This field is required</p>
              )}
            </div>
          </div>
        </div>
        <div className="warehouse-form__buttons">
          <Link to={cancelLink}>
            <button className="warehouse-form__cancel" type="button">
              Cancel
            </button>
          </Link>
          <button className="warehouse-form__save" type="submit">
            {buttonText}
          </button>
        </div>
      </form>
    </div>
  );
};

export default WarehouseForm;
