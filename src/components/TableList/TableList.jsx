import "./TableList.scss";
import Table from "../../components/Table/Table";
import { Link } from "react-router-dom";
import { useState } from "react";
import searchIcon from "../../assets/icons/search-24px.svg";

const TableList = ({ headers, type, title, ctaText }) => {
  const [searchTerm, setSearchTerm] = useState();

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };

  return (
    <div className="table-list">
      <div className="table-list__header">
        <h1>{title}</h1>
        <form className="table-list__form">
          <div className="table-list__search">
            <img
              className="table-list__icon"
              src={searchIcon}
              alt="search icon"
            />
            <input
              className="table-list__input"
              type="search"
              placeholder="Search..."
              onChange={handleSearch}
            />
          </div>
          <Link className="table-list__cta" to={`/${type}/add`}>
            {ctaText}
          </Link>
        </form>
      </div>
      <Table type={type} headers={headers} searchTerm={searchTerm} />
    </div>
  );
};

export default TableList;
