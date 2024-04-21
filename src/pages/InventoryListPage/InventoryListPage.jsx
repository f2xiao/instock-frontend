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
      <div className="empty"></div>
      <div className="footer">
        <p className="footer__text">© InStock Inc. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default InventoryListPage;
