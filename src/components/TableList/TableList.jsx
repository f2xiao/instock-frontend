import "./TableList.scss";
import Table from "../../components/Table/Table";
import { Link } from "react-router-dom";

const TableList = ({ headers, type, title, ctaText }) => {
  return (
    <div className="table-list">
      <div className="table-list__header">
        <h1>{title}</h1>
        <form className="table-list__form">
          <input type="search" placeholder="Search..." />
          <Link className="table-list__cta" to={`/${type}/add`}>
            {ctaText}
          </Link>
        </form>
      </div>
      <Table type={type} headers={headers} />
    </div>
  );
};

export default TableList;
