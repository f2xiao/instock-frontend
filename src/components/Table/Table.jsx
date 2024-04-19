import Row from "../../components/Row/Row";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../utils/api";
import "./Table.scss";

const Table = ({ type, headers }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${API_URL}/api/${type}`);

      setData(response.data);
    };

    fetchData();
  }, []);

  return (
    <div className="table">
      <div>
        <Row dataObj={headers} />
        {data.map((item) => (
          <Row key={item.id} dataObj={item} />
        ))}
      </div>
    </div>
  );
};

export default Table;
