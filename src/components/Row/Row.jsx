import "./Row.scss";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import arrowRtIcon from "../../assets/icons/chevron_right-24px.svg";

const Row = () => {
  const rowObj = {
    warehouse: "warehouse",
    address: "address",
    "contact name": "contact_name",
    "contact information": "contact",
  };

  // const rowObj = {
  //   "inventory item": "inventory",
  //   category: "category",
  //   Status: "Status",
  //   Qty: "Qty",
  //   warehouse: "warehouse",
  // };
  // console.log(Object.entries(rowObj));

  const firstEntry = Object.entries(rowObj)[0];
  const secondEntry = Object.entries(rowObj)[1];
  const thirdEntry = Object.entries(rowObj)[2];
  const fourthEntry = Object.entries(rowObj)[3];
  const fifthEntry = Object.entries(rowObj)[4];
  // console.log(rowNameArr);

  return (
    <div className="row">
      <div className="row__wrapper">
        <div className="row__column row__column--first">
          <p className="row__header">{firstEntry[0]}</p>
          <p className="row__name">
            {firstEntry[1]} <img src={arrowRtIcon} alt="arrow right icon" />
          </p>
          <p className="row__header">{secondEntry[0]}</p>
          <p className="row__value">{secondEntry[1]}</p>
        </div>
        <div className="row__column row__column--second">
          <p className="row__header">{thirdEntry[0]}</p>
          <p className="row__value">{thirdEntry[1]}</p>
          <p className="row__header">{fourthEntry[0]}</p>
          <p className="row__value">{fourthEntry[1]}</p>
          {fifthEntry ? (
            <>
              <p className="row__header">{fifthEntry[0]}</p>
              <p className="row__value">{fifthEntry[1]}</p>
            </>
          ) : (
            ""
          )}
        </div>
        <div className="row__cta">
          <img alt="delete icon" className="row__delete" src={deleteIcon} />
          <img alt="edit icon" className="row__edit" src={editIcon} />
        </div>
      </div>
    </div>
  );
};

export default Row;
