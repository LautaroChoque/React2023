import Navbar from './Navbar/Navbar';
import './App.css';
import CartWidget from './CartWidget/CartWidget';
import ItemListContainer from './ItemListContainer/ItemListContainer';


function App() {
  return (
    <>
    <Navbar/>
    <CartWidget/>
    
    <ItemListContainer bienvenida={'Hola como te va'}/>
    </>
   
  );
}



export default App;

