import Navbar from './Navbar/Navbar';
import './App.css';
import  { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
          <Routes>
              <Route path='/' element={<ItemListContainer/>}/>  
              <Route path='/item/:id' element={<ItemDetailContainer/>} />  
              <Route path='/category/:idCategoria' element={<ItemListContainer/>} />  
          </Routes>
    
    
    </BrowserRouter>
    </>
   
  );
}



export default App;

