import { useState } from "react";
import DeleteComponent from "../../components/DeleteComponent/DeleteComponent";
import "./WarehouseListPage.scss";

const WarehouseListPage = () => {

  const [itemToDelete, setItemToDelete] = useState();
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  
  const handleCancelClick = () => {
    setOpenDeleteModal(false);
  }

  const handleDeleteClick = (id) => {

  }

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
          itemId={itemToDelete.id}/>
      }
    </>
  );
};

export default WarehouseListPage;
