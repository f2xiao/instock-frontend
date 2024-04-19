import "./InventoryListPage.scss";
import { useState } from "react";
import DeleteComponent from "../../components/DeleteComponent/DeleteComponent";
import { API_URL } from '../../utils/api';

const InventoryListPage = () => {

  const [itemToDelete, setItemToDelete] = useState();
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handleCancelClick = () => {
    setOpenDeleteModal(false);
  }

  const handleDeleteClick = async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/api/inventories/${id}`);
      if (response.status === 204) {
        //call new Inventory list
      }
    } catch (error) {
      console.log('Failed to delete inventory', error);
    }
  }

  //to be called on click on delete button from inventory list page
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
