import "./TableList.scss";
import Table from "../../components/Table/Table";

const TableList = ({ headers, type, title, ctaText }) => {
  return (
    <div className="table-list">
      <div className="table-list__header">
        <h1>{title}</h1>
        <form className="table-list__form">
          <input type="search" placeholder="Search..." />
          <button>{ctaText}</button>
        </form>
      </div>
      <Table type={type} headers={headers} />
    </div>
  );
};

export default TableList;
