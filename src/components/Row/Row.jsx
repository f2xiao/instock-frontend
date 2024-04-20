import "./Row.scss";
import { Link } from "react-router-dom";
import arrowRtIcon from "../../assets/icons/chevron_right-24px.svg";
import { useEffect, useState } from "react";

const Row = ({ dataObj, type }) => {
  const [rowObj, setRowObj] = useState({});

  useEffect(() => {
    if (type === "warehouses") {
      setRowObj({
        warehouse: dataObj["warehouse_name"],
        address: `${dataObj.address} ${
          dataObj.city ? `${dataObj.city} ,` : ""
        } ${dataObj.country}`,
        "contact name": dataObj["contact_name"],
        "contact information": `${dataObj["contact_phone"]} ${dataObj["contact_email"]}`,
      });
    }

    if (type === "inventories") {
      setRowObj({
        "inventory item": dataObj["item_name"],
        category: dataObj["category"],
        Status: dataObj["status"],
        Qty: dataObj["quantity"],
        warehouse: dataObj["warehouse_name"],
      });
    }
    if (type === "warehouse-inventories") {
      setRowObj({
        "inventory item": dataObj["item_name"],
        category: dataObj["category"],
        Status: dataObj["status"],
        Qty: dataObj["quantity"],
      });
    }
  }, [type, dataObj]);

  // console.log(Object.entries(rowObj));
  // console.log(dataObj["status"]);

  const rowHeaders = Object.keys(rowObj);
  // console.log(rowHeaders);

  // console.log(rowNameArr);

  return (
    <>
      <td>
        <span className="row__header">{rowHeaders[0]}</span>
        <Link to={`/${type}/${dataObj.id}`}>
          <span className="row__first">{rowObj[rowHeaders[0]]}</span>
          <img className="row__img" src={arrowRtIcon} alt="arrow right icon" />
        </Link>
      </td>
      <td className="row__status row__status--mobile">
        <span className="row__header">{rowHeaders[2]}</span>
        <span
          className={
            type !== "inventories" && type !== "warehouse-inventories"
              ? ""
              : ` ${
                  dataObj["status"].toLowerCase() === "in stock"
                    ? "row__tag "
                    : "row__tag row__tag--error"
                }`
          }
        >
          {rowObj[rowHeaders[2]]}
        </span>
      </td>
      <td>
        <span className="row__header">{rowHeaders[1]}</span>
        <span className="row__address">{rowObj[rowHeaders[1]]}</span>
      </td>
      <td className="row__status row__status--tablet">
        <span className="row__header">{rowHeaders[2]}</span>
        <span
          className={
            type !== "inventories" && type !== "warehouse-inventories"
              ? ""
              : ` ${
                  dataObj["status"].toLowerCase() === "in stock"
                    ? "row__tag "
                    : "row__tag row__tag--error"
                }`
          }
        >
          {rowObj[rowHeaders[2]]}
        </span>
      </td>
      <td>
        <span className="row__header">{rowHeaders[3]}</span>
        <span className="row__info">{rowObj[rowHeaders[3]]}</span>
      </td>
      {rowHeaders[4] ? (
        <>
          <td className="row__warehouse ">
            <span className="row__header">{rowHeaders[4]}</span>
            {rowObj[rowHeaders[4]]}
          </td>
          <td>
            <span className="row__header">{rowHeaders[4]}</span>
            {rowObj[rowHeaders[4]]}
          </td>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Row;
