import "./Row.scss";

import arrowRtIcon from "../../assets/icons/chevron_right-24px.svg";

const Row = ({ dataObj }) => {
  const rowObj = {
    warehouse: dataObj["warehouse_name"],
    address: `${dataObj.address} ${dataObj.city ? `${dataObj.city} ,` : ""} ${
      dataObj.country
    }`,
    "contact name": dataObj["contact_name"],
    "contact information": `${dataObj["contact_phone"]} ${dataObj["contact_email"]}`,
  };
  // console.log(dataObj);

  // const rowObj = {
  //   "inventory item": dataObj["item_name"],
  //   category: dataObj["category"],
  //   Status: dataObj["status"],
  //   Qty: dataObj["quantity"],
  //   warehouse: dataObj["warehouse_name"],
  // };
  // console.log(Object.entries(rowObj));

  const rowHeaders = Object.keys(rowObj);
  // console.log(rowHeaders);

  // console.log(rowNameArr);

  return (
    <>
      <td>
        <span className="row__header">{rowHeaders[0]}</span>
        {rowObj[rowHeaders[0]]}
        <img className="row__img" src={arrowRtIcon} alt="arrow right icon" />
      </td>
      {/* <td className="row__status row__status--tablet">
        <span className="row__header">{rowHeaders[2]}</span>
        {rowObj[rowHeaders[2]]}
      </td> */}
      <td className="row__address">
        <span className="row__header">{rowHeaders[1]}</span>
        {rowObj[rowHeaders[1]]}
      </td>
      <td className="row__status">
        <span className="row__header">{rowHeaders[2]}</span>
        {rowObj[rowHeaders[2]]}
      </td>
      <td className="row__info">
        <span className="row__header">{rowHeaders[3]}</span>
        {rowObj[rowHeaders[3]]}
      </td>
      {rowHeaders[4] ? (
        <>
          <td>
            <span className="row__header">{rowHeaders[4]}</span>
            {rowObj[rowHeaders[4]]}
          </td>
          {/* <td>
            <span className="row__header">{rowHeaders[4]}</span>
            {rowObj[rowHeaders[4]]}
          </td> */}
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Row;
