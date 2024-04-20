import "./TableList.scss";
import Table from "../../components/Table/Table";
import axios from "axios";
import { API_URL } from "../../utils/api";
import { useEffect, useState } from "react";

const TableList = ({ headers, type, title, ctaText }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(`${API_URL}/api/${type}`);
    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="table-list">
      <div className="table-list__header">
        <h1>{title}</h1>
        <form className="table-list__form">
          <input type="search" placeholder="Search..." />
          <button>{ctaText}</button>
        </form>
      </div>
      <Table type={type} headers={headers} data={data} />
    </div>
  );
};

export default TableList;
