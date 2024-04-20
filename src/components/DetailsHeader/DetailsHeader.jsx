import "./DetailsHeader.scss";
import backArrowIcon from "../../assets/icons/arrow_back-24px.svg";
import { Link } from "react-router-dom";

const DetailsHeader = ({ title, linkUrl }) => {
  return (
    <div className="details-header">
      <h1>
        <Link to={linkUrl}>
          <img
            className="details-header__icon"
            src={backArrowIcon}
            alt="back arrow icon"
          />
        </Link>
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
