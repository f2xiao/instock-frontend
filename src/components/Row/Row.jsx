import "./Row.scss";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
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

  // const rowObj = {
  //   "inventory item": dataObj["item_name"],
  //   category: dataObj["category"],
  //   Status: dataObj["status"],
  //   Qty: dataObj["quantity"],
  //   warehouse: dataObj["warehouse_name"],
  // };
  // console.log(Object.entries(rowObj));

  const rowHeaders = Object.keys(rowObj);
  console.log(rowHeaders);

  const firstEntry = Object.entries(rowObj)[0];
  const secondEntry = Object.entries(rowObj)[1];
  const thirdEntry = Object.entries(rowObj)[2];
  const fourthEntry = Object.entries(rowObj)[3];
  const fifthEntry = Object.entries(rowObj)[4];
  // console.log(rowNameArr);

  return (
    <div className="row">
      <div className="row__column row__column--first">
        <p className="row__header">{firstEntry[0]}</p>
        <p
          className={dataObj.action ? "row__name" : "row__name row__name--body"}
        >
          {firstEntry[1]}
          {dataObj.action ? (
            ""
          ) : (
            <img src={arrowRtIcon} alt="arrow right icon" />
          )}
        </p>
        <p className="row__header">{secondEntry[0]}</p>
        <p className="row__value row__value--second">{secondEntry[1]}</p>
      </div>
      <div className="row__column row__column--second">
        <p className="row__header">{thirdEntry[0]}</p>
        <p className="row__value row__value--fixed">{thirdEntry[1]}</p>
        <p className="row__header">{fourthEntry[0]}</p>
        <p className="row__value row__value--fixed">{fourthEntry[1]}</p>
        {fifthEntry ? (
          <>
            <p className="row__header">{fifthEntry[0]}</p>
            <p className="row__value">{fifthEntry[1]}</p>
          </>
        ) : (
          ""
        )}
      </div>
      <div className="row__action">{dataObj.action ? "action" : ""}</div>
      <div className="row__cta">
        {dataObj.action ? (
          ""
        ) : (
          <>
            <img alt="delete icon" className="row__delete" src={deleteIcon} />
            <img alt="edit icon" className="row__edit" src={editIcon} />
          </>
        )}
      </div>
    </div>
  );
};

export default Row;
