import "./BackLink.scss";
import { Link } from "react-router-dom";
import backArrowIcon from "../../assets/icons/arrow_back-24px.svg";
const BackLink = ({ title, linkUrl }) => {
  return (
    <div className="back-link">
      <h1>
        <Link to={linkUrl}>
          <img
            className="back-link__icon"
            src={backArrowIcon}
            alt="back arrow icon"
          />
        </Link>
        {title}
      </h1>
    </div>
  );
};

export default BackLink;
