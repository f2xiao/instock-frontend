import "./DetailsHeader.scss";
import backArrowIcon from "../../assets/icons/arrow_back-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";

const DetailsHeader = ({ title }) => {
  return (
    <div className="details-header">
      <h1>
        <img
          className="details-header__icon"
          src={backArrowIcon}
          alt="back arrow icon"
        />
        {title}
      </h1>
      <button className="details-header__cta details-header__cta--first"></button>

      <button className="details-header__cta details-header__cta--second">
        Edit
      </button>
    </div>
  );
};

export default DetailsHeader;
