import "./WarehouseListPage.scss";
import Table from "../../components/Table/Table";

const WarehouseListPage = () => {
  const headers = {
    warehouse_name: "warehouse",
    address: "address",
    city: "",
    country: "",
    contact_name: "contact name",
    contact_phone: "contact",
    contact_email: "information",
    action: "action",
  };

  return (
    <div className="warehouse">
      <div className="warehouse__header">
        <h1>Warehouses</h1>
        <div className="warehouse__cta">
          <input type="search" />
          <button>Add New Warehouse</button>
        </div>
      </div>
      <Table type="warehouses" headers={headers} />
    </div>
  );
};

export default WarehouseListPage;
