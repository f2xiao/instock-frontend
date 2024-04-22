import "./InventoryListPage.scss";
import TableList from "../../components/TableList/TableList";

const InventoryListPage = () => {
  const headers = ["inventory item", "category", "Status", "Qty", "warehouse"];
  return (
    <div>
      <TableList
        type="inventories"
        headers={headers}
        title="Inventories"
        ctaText="+ Add New Item"
      />
    </div>
  );
};

export default InventoryListPage;
