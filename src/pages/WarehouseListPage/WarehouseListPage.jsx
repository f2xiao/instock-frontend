import "./WarehouseListPage.scss";
import TableList from "../../components/TableList/TableList";

const WarehouseListPage = () => {
  const headers = [
    "warehouse",
    "address",
    "contact name",
    "contact information",
  ];

  // console.log(process.env.REACT_APP_NOT_SECRET_CODE);

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
