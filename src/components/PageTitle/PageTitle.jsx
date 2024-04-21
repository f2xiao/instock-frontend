import "./PageTitle.scss";
import { Link } from "react-router-dom";
import backArrowIcon from "../../assets/icons/arrow_back-24px.svg";

const PageTitle = ({ title, backLink, editLink }) => {
  return (
    <div className="page-title">
      <h1 className="page-title__title">
        <Link to={backLink}>
          <img
            className="page-title__icon"
            src={backArrowIcon}
            alt="back arrow icon"
          />
        </Link>
        {title}
      </h1>
      {editLink && (
        <>
          <Link
            to={editLink}
            className="page-title__cta page-title__cta--first"
          >
            <button className="page-title__cta page-title__cta--first"></button>
          </Link>
          <Link
            to={editLink}
            className="page-title__cta page-title__cta--second"
          >
            <button className="page-title__cta page-title__cta--second">
              Edit
            </button>
          </Link>
        </>
      )}
    </div>
  );
};

export default PageTitle;
