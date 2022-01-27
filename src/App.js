
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/Container/ItemListContainer'
import Cart from './components/Cart/Cart';
import CartContextProvider from './context/CartContext';





function App() {



  return (

 
    

 

   <div className= 'border border-3 border primary'>

     <center>

     
<CartContextProvider>

      <BrowserRouter>  
    <NavBar/> 
    <Routes>
    <Route path='/catalogo' element={<ItemListContainer/>} />
    <Route path='/categoria/:idCategoria' element={<ItemListContainer/>} />
    <Route path='/item/:id' element={<ItemDetailContainer/>} />
    <Route path='/cart' element={<Cart/>} />
    </Routes>
    </BrowserRouter>

</CartContextProvider>     

</center>


   </div>

  

  );
}

export default App;
