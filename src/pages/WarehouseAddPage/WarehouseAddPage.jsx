import "./WarehouseAddPage.scss";
import PageTitle from "../../components/PageTitle/PageTitle";
import WarehouseForm from "../../components/WarehouseForm/WarehouseForm";

const WarehouseAddPage = () => {
  return (
    <div className="warehouse-add">
      <div className="warehouse-add__title">
        <PageTitle title="add new Warehouse" backLink="/warehouses" />
      </div>
      <WarehouseForm buttonText="+ Add Warehouse" cancelLink="/warehouses" />
    </div>
  );
};

export default WarehouseAddPage;
