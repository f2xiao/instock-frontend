import Row from "../../components/Row/Row";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../utils/api";
import "./Table.scss";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";

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
            <th key={header}>{header}</th>
          ))}
          <th>action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <Row dataObj={item} />
            <td className="table__cta">
              <img
                alt="delete icon"
                className="row__delete"
                src={deleteIcon}
                onClick={() => {
                  handleDelete(item.id);
                }}
              />
              <img alt="edit icon" className="row__edit" src={editIcon} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
