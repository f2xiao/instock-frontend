import { useState } from "react";
import DeleteComponent from "../../components/DeleteComponent/DeleteComponent";
import "./WarehouseListPage.scss";
import { API_URL } from '../../utils/api';

const WarehouseListPage = () => {

  const [itemToDelete, setItemToDelete] = useState();
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handleCancelClick = () => {
    setOpenDeleteModal(false);
  }

  const handleDeleteClick = async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/api/warehouses/${id}`);
      if (response.status === 204) {
        //call new warehouse list
      }
    } catch (error) {
      console.log('Failed to delete warehouse', error);
    }
  }

   //to be called on click on delete button from warehouse list page
  const handleWarehouseDeleteClick = (warehouse) => {
    setItemToDelete(warehouse);
    setOpenDeleteModal(true);
  }

  return (
    <>
      <div>WarehouseListPage</div>
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

export default WarehouseListPage;
