import Row from "../../components/Row/Row";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../utils/api";
import "./Table.scss";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import DeleteComponent from "../DeleteComponent/DeleteComponent";

const Table = ({ type, headers }) => {

  const [data, setData] = useState([]);
  const [itemToDelete, setItemToDelete] = useState();
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handleCancelClick = () => {
    setOpenDeleteModal(false);
  }

  const handleDeleteClick = async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/api/${type}/${id}`);
      if (response.status === 204) {
        fetchData();
        setOpenDeleteModal(false);
      }
    } catch (error) {
      console.log(`Failed to delete ${type}`, error);
    }
  }

  //to be called on click on delete button from  list page
  const handleItemDeleteClick = (item) => {
    setItemToDelete(item);
    setOpenDeleteModal(true);
  }

  const fetchData = async () => {
    const response = await axios.get(`${API_URL}/api/${type}`);
    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
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
                    handleItemDeleteClick(item);
                  }}
                />
                <img alt="edit icon" className="row__edit" src={editIcon} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {openDeleteModal &&
        <DeleteComponent
          handleCancelClick={handleCancelClick}
          handleDeleteClick={handleDeleteClick}
          itemType="warehouse"
          itemName={itemToDelete.warehouse_name}
          itemId={itemToDelete.id} />
      }
    </>
  );
};

export default Table;
