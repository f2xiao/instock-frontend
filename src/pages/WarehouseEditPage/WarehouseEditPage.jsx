import "./WarehouseEditPage.scss";
import PageTitle from "../../components/PageTitle/PageTitle";
import WarehouseForm from "../../components/WarehouseForm/WarehouseForm";
import { useParams } from "react-router-dom";

const WarehouseEditPage = () => {
  const { id } = useParams();
  return (
    <div>
      <PageTitle title="edit warehouse" backLink={`/warehouses/${id}`} />
      <WarehouseForm buttonText="save" cancelLink={`/warehouses/${id}`} />
    </div>
  );
};

export default WarehouseEditPage;
