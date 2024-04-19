import "./WarehouseListPage.scss";
import Table from "../../components/Table/Table";

const WarehouseListPage = () => {

  const headers = [
    "warehouse",
    "address",
    "contact name",
    "contact information",
  ];

  return (
    <div className="page">
      <div className="page__header">
        <h1>Warehouses</h1>
        <div className="page__cta">
          <input type="search" />
          <button>Add New Warehouse</button>
        </div>
      </div>
      <Table type="warehouses" headers={headers} />
      {/* <Table type="inventories" headers={headers} /> */}
    </div>
  );
};

export default WarehouseListPage;
