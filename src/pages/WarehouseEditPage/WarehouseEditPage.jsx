import "./WarehouseEditPage.scss";
import WarehouseEdit from "../../components/WarehouseEdit/WarehouseEdit";

const WarehouseEditPage = () => {
  const warehouse = {
    id: 1,
    warehouse_name: "Manhattan",
    address: "503 Broadway",
    city: "New York",
    country: "USA",
    contact_name: "Parmin Aujla",
    contact_position: "Warehouse Manager",
    contact_phone: "+1 (646) 123-1234",
    contact_email: "paujla@instock.com",
  };
  return (
    <div>
      <WarehouseEdit warehouse={warehouse} />
    </div>
  );
};

export default WarehouseEditPage;
