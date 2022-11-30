import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Brand from "./components/Brand";
import { UserContext } from './js/UserContext';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import './styles/style.css'
function App() {
  const [user, setUser] = useState(null)
  return (
    <>
    <UserContext.Provider value={{user, setUser}}>
    <Brand/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/SignUp" element={<Register/>}/>
      <Route path="/Login" element={<Login/>}/> 
    </Routes>
    </BrowserRouter>
    </UserContext.Provider>
    </>
  )
}

export default App
