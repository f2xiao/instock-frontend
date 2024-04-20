import "./Table.scss";
import axios from "axios";
import { API_URL } from "../../utils/api";
import { useEffect, useState } from "react";
import Row from "../../components/Row/Row";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import DeleteComponent from "../DeleteComponent/DeleteComponent";
import sortIcon from "../../assets/icons/sort-24px.svg";

const Table = ({ type, headers, searchTerm }) => {

  const [isAsc, setIsAsc] = useState(false);
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

  const handleColumnSorting = async (event) => {
    setIsAsc(!isAsc);
    let columnName = event.target.innerText ? event.target.innerText : event.target.parentElement.innerText;
    let sortBy = '';
    if (type === "warehouses") {
      if (columnName.toLowerCase() === "warehouse") {
        sortBy = "warehouse_name";
      } else if (columnName.toLowerCase() === "address") {
        sortBy = "address";
      } else if (columnName.toLowerCase() === "contact name") {
        sortBy = "contact_name";
      } else if (columnName.toLowerCase() === "contact information") {
        sortBy = "contact_phone";
      }
    } else if (type === "inventories") {
      if (columnName.toLowerCase() === "warehouse") {
        sortBy = "warehouse_name";
      } else if (columnName.toLowerCase() === "inventory item") {
        sortBy = "item_name";
      } else if (columnName.toLowerCase() === "category") {
        sortBy = "category";
      } else if (columnName.toLowerCase() === "status") {
        sortBy = "status";
      } else if (columnName.toLowerCase() === "quantity") {
        sortBy = "quantity";
      }
    }

    let params = searchTerm ? `?s=${searchTerm}` : '';
    params += params ? (sortBy ? `&sort_by=${sortBy}` : '') :  (sortBy ? `?sort_by=${sortBy}` : '');
    params += params ? `&order_by=${isAsc ? 'asc' : 'desc'}` : `?order_by=${isAsc ? 'asc' : 'desc'}` ;
    const response = await axios.get(`${API_URL}/api/${type}${params}`);
    setData(response.data);
  }

  useEffect(() => {
    if (openDeleteModal) {
      const modalDiv = document.getElementById('delete-modal');
      modalDiv.style.height = document.body.clientHeight + "px";
      window.scrollTo(0, 0);
    }
  }, [openDeleteModal]);

  const fetchData = async (searchTerm) => {
    const params = searchTerm ? `?s=${searchTerm}` : '';
    const response = await axios.get(`${API_URL}/api/${type}${params}`);
    setData(response.data);
  };

  useEffect(() => {
    fetchData(searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header} className="table__header" onClick={handleColumnSorting} >
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
                    handleItemDeleteClick(item);
                  }}
                />
                <img alt="edit icon" className="table__icon" src={editIcon} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {openDeleteModal &&
        <DeleteComponent
          handleCancelClick={handleCancelClick}
          handleDeleteClick={handleDeleteClick}
          itemType={type === "warehouses" ? "warehouse" : "inventory"}
          itemName={type === "warehouses" ? itemToDelete.warehouse_name : itemToDelete.item_name}
          itemId={itemToDelete.id} />
      }
    </>
  );
};

export default Table;
