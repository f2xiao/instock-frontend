import "./Table.scss";
import axios from "axios";
import { API_URL } from "../../utils/api";
import { useEffect, useState } from "react";
import Row from "../../components/Row/Row";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import sortIcon from "../../assets/icons/sort-24px.svg";

const Table = ({ type, headers }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(`${API_URL}/api/${type}`);
    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const handleDelete = async (id) => {
    // console.log(id);
    try {
      const response = await axios.delete(`${API_URL}/api/${type}/${id}`);
      console.log(response);

      fetchData();
    } catch (error) {
      console.log("can't delete the item", error);
    }
  };

  return (
    <table className="table">
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header} className="table__header">
              {header}
              <img className="table__sort" src={sortIcon} alt="sort icon" />
            </th>
          ))}
          <th className="table__actions">actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <Row dataObj={item} type={type} />
            <td className="table__cta">
              <img
                alt="delete icon"
                className="table__icon"
                src={deleteIcon}
                onClick={() => {
                  handleDelete(item.id);
                }}
              />
              <img alt="edit icon" className="table__icon" src={editIcon} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
