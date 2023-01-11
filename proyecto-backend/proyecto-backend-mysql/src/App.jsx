//bootstrap:
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
//hooks:
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserContext } from './js/UserContext';
import { BrandContext } from './js/BrandContext';
//componentes:
import Brand from "./components/Brand";
import Footer from './components/Footer';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from './pages/Profile';
import Register from "./pages/Register";
//estilos:
import 'swiper/css';
import 'swiper/css/free-mode';
import './styles/style.css';
import 'aos/dist/aos.css'; 
import CardInfo from './pages/CardInfo';
import Cart from './components/Cart';
import { CartProvider } from 'react-use-cart';

//TODO:
/**
 * SUPER IMPORTANTE:
 * usar el useCart para crear el carrito
 */
/**
 * MEDIA IMPORTANCIA:
 * hacer el filtrado entre productos de hombre y de mujer
 * hacer el sistema de favoritos
 * hacer el sistema de comentarios
 */
/**
 * POCA IMPORTANCIA:
 * ajustar imagen de perfil para que siempre sea del mismo tamaño
 * usar el tastify para arreglar problema del scroll en register ademas queda bonito
 */

function App() {
  const [user, setUser] = useState(null);
  const [brand, setBrand] = useState(null);


  useEffect(()=>{ 
        const userLogged = JSON.parse(sessionStorage.getItem('userLogged'))   
        if(!userLogged){   
          setUser(null) 
        }else{
          setUser(userLogged)
        }   
      }, [])
  
  return (
    <><div className='bottom-footer'>
    <UserContext.Provider value={{user, setUser}}>
      <CartProvider>
        <BrandContext.Provider value={{brand, setBrand}}>
          <BrowserRouter>
          <Brand/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/SignUp" element={<Register/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path='/cardInfo/:id' element={<CardInfo/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
          <Footer/>
          </BrowserRouter>
        </BrandContext.Provider>
      </CartProvider>
    </UserContext.Provider>
    </div>
    </>
  )
}

export default App
