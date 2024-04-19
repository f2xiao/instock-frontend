import "./WarehouseListPage.scss";
import Table from "../../components/Table/Table";

const WarehouseListPage = () => {
  // const headers = [
  //   "warehouse",
  //   "address",
  //   "contact name",
  //   "contact information",
  // ];

  const headers = ["inventory item", "category", "Status", "Qty", "warehouse"];
  return (
    <div className="page">
      <div className="page__header">
        <h1>Warehouses</h1>
        <form className="page__form">
          <input type="search" placeholder="Search..." />
          <button>Add New Warehouse</button>
        </form>
      </div>
      {/* <Table type="warehouses" headers={headers} /> */}
      <Table type="inventories" headers={headers} />
    </div>
  );
};

export default WarehouseListPage;
