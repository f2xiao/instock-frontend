import "./TableList.scss";
import Table from "../../components/Table/Table";
import { useState } from "react";

const TableList = ({ headers, type, title, ctaText }) => {
  
  const [searchTerm, setSearchTerm] = useState();

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  }

  return (
    <div className="table-list">
      <div className="table-list__header">
        <h1>{title}</h1>
        <form className="table-list__form">
          <input type="search" placeholder="Search..." onChange={handleSearch} />
          <button>{ctaText}</button>
        </form>
      </div>
      <Table type={type} headers={headers} searchTerm={searchTerm} />
    </div>
  );
};

export default TableList;
