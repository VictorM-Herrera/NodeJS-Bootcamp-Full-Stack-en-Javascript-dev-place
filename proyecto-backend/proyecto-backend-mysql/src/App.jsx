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
      <BrandContext.Provider value={{brand, setBrand}}>
        <BrowserRouter>
        <Brand/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/SignUp" element={<Register/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/profile" element={<Profile/>}/>  
        </Routes>
        <Footer/>
        </BrowserRouter>
      </BrandContext.Provider>
    </UserContext.Provider>
    </div>
    </>
  )
}

export default App
