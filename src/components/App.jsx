import Navbar from './Navbar/Navbar';
import './App.css';
import  { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemCount } from './ItemCount/ItemCount';

function App() {
  return (
    <>
    <Navbar/>
    <ItemListContainer/>
    <ItemCount valInicial={1} stock={10}/>
    </>
   
  );
}



export default App;

