import "./Table.scss";

import Row from "../../components/Row/Row";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import DeleteComponent from "../DeleteComponent/DeleteComponent";
import sortIcon from "../../assets/icons/sort-24px.svg";
import axios from "axios";
import { API_URL } from "../../utils/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Table = ({ type, headers, warehouseInventories = false }) => {
  const [data, setData] = useState([]);
  const [itemToDelete, setItemToDelete] = useState();
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [url, setUrl] = useState(`${API_URL}/api/${type}`);
  const { id } = useParams();

  const fetchData = async (url) => {
    const response = await axios.get(url);
    setData(response.data);
  };

  useEffect(() => {
    console.log(url);

    if (id && type === "inventories") {
      setUrl(`${API_URL}/api/warehouses/${id}/inventories`);
    }
    console.log(url);

    fetchData(url);
  }, [url, id, type]);

  const handleCancelClick = () => {
    setOpenDeleteModal(false);
  };

  const handleDeleteClick = async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/api/${type}/${id}`);
      if (response.status === 204) {
        fetchData(url);
        setOpenDeleteModal(false);
      }
    } catch (error) {
      console.log(`Failed to delete ${type}`, error);
    }
  };

  // to be called on click on delete button from  list page
  const handleItemDeleteClick = (item) => {
    setItemToDelete(item);
    setOpenDeleteModal(true);
  };

  return (
    <>
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
              <Row
                dataObj={item}
                type={type}
                warehouseInventories={warehouseInventories}
              />
              <td className="table__cta">
                <img
                  alt="delete icon"
                  className="table__icon"
                  src={deleteIcon}
                  onClick={() => {
                    handleItemDeleteClick(item);
                  }}
                />
                <Link to={`/${type}/${item.id}/edit`}>
                  <img alt="edit icon" className="table__icon" src={editIcon} />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {openDeleteModal && (
        <DeleteComponent
          handleCancelClick={handleCancelClick}
          handleDeleteClick={handleDeleteClick}
          itemType={type === "warehouses" ? "warehouse" : "inventory"}
          itemName={
            type === "warehouses"
              ? itemToDelete.warehouse_name
              : itemToDelete.item_name
          }
          itemId={itemToDelete.id}
        />
      )}
    </>
  );
};

export default Table;
