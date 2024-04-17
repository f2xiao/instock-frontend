import './App.scss';
import WarehouseEdit from './components/WarehouseEdit/WarehouseEdit'
import WarehouseAdd from './components/WarehouseAdd/WarehouseAdd'

function App() {
  return (
    <div className="App">
      <WarehouseEdit />
      <WarehouseAdd />
    </div>
  );
}

export default App;
