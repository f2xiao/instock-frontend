import "./InventoryListPage.scss";
import { useState } from "react";
import DeleteComponent from "../../components/DeleteComponent/DeleteComponent";

const InventoryListPage = () => {

  const [itemToDelete, setItemToDelete] = useState();
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handleCancelClick = () => {
    setOpenDeleteModal(false);
  }

  const handleDeleteClick = (id) => {
    
  }

  const handleInventoryDeleteClick = (inventory) => {
    setItemToDelete(inventory);
    setOpenDeleteModal(true);
  }

  return <>
    <div>InventoryListPage</div>
    {openDeleteModal &&
      <DeleteComponent
        handleCancelClick={handleCancelClick}
        handleDeleteClick={handleDeleteClick}
        itemType="inventory"
        itemName={itemToDelete.item_name}
        itemId={itemToDelete.id} />
    }
  </>
};

export default InventoryListPage;
