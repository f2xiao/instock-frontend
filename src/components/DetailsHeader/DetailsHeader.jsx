import "./DetailsHeader.scss";
import BackLink from "../BackLink/BackLink";

const DetailsHeader = ({ title, linkUrl }) => {
  return (
    <div className="details-header">
      <BackLink title={title} linkUrl={linkUrl} />
      <button className="details-header__cta details-header__cta--first"></button>
      <button className="details-header__cta details-header__cta--second">
        Edit
      </button>
    </div>
  );
};

export default DetailsHeader;
