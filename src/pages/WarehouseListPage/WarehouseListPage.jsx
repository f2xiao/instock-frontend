import "./WarehouseListPage.scss";
import TableList from "../../components/TableList/TableList";

const WarehouseListPage = () => {
  const headers = [
    "warehouse",
    "address",
    "contact name",
    "contact information",
  ];

  return (
    <div>
      <TableList
        type="warehouses"
        headers={headers}
        title="Warehouses"
        ctaText="+ Add New Warehouse"
      />
    </div>
  );
};

export default WarehouseListPage;
