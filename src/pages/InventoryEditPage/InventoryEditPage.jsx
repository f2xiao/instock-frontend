import "./InventoryEditPage.scss";
import backArrow from "../../assets/icons/arrow_back-24px.svg"
import { useNavigate, useParams } from "react-router-dom";

const InventoryEditPage = () => {

  const navigate = useNavigate();
  const { inventoryId } = useParams();
  const handleBackClick = () => {
    navigate('/inventories');
  }

  return <div>
    <div>
      <img src={backArrow} onClick={handleBackClick}></img>
      Edit Inventory Item
    </div>
    <div>
      <div>
        Item Details
      </div>
      <div>
        Item Availability
      </div>
    </div>

  </div>;
};

export default InventoryEditPage;
