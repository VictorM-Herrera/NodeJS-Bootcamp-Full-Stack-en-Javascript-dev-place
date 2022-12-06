import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Brand from "./components/Brand";
import { UserContext } from './js/UserContext';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Test from './pages/Test';
import './styles/style.css'
function App() {
  const [user, setUser] = useState(null);
  // useEffect(()=>{ 
  //       const userLogged = localStorage.getItem('token');    
  //       if(!userLogged){   
  //         setUser(null) 
  //       }else{
  //         setUser(userLogged)
  //       }   
  //     }, [])
  return (
    <>
    <UserContext.Provider value={{user, setUser}}>
      <BrowserRouter>
      <Brand/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/SignUp" element={<Register/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/test" element={<Test/>}/>  
      </Routes>
      </BrowserRouter>
    </UserContext.Provider>
    </>
  )
}

export default App
