import React, { useState } from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BrandContext } from '../js/BrandContext';
import { UserContext } from '../js/UserContext';

export default function Login() {
    const brandLocation = useContext(BrandContext);
    brandLocation.setBrand(1);
    const [data, setData] = useState({
        email:'',
        password:''
    });
    function handleInputchange(event)
    {
        setData({
            ...data,
            [event.target.name] : event.target.value
        })
    }
    const login = useContext(UserContext);
    const navigate = useNavigate();
    
    function handleSubmit(event)
    {
        event.preventDefault();
        fetch('http://localhost:5050/users/login',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then((res)=>res.json())
        .then((token) => {
            if(localStorage.getItem("token"))//si hay un token
            {
                localStorage.removeItem("token");//lo borro
                localStorage.setItem("token", token.tokenAccess)//agrego el nuevo
            }else{
                localStorage.setItem("token", token.tokenAccess);//simplemente lo agrego
            }
            if(sessionStorage.getItem('userLogged'))//misma logica
            {
                sessionStorage.removeItem('userLogged');
                sessionStorage.setItem("userLogged", JSON.stringify(token.user));
            }else{
                sessionStorage.setItem("userLogged", JSON.stringify(token.user));
            }
            let userLogged = JSON.parse(sessionStorage.getItem('userLogged'));
            login.setUser(userLogged);//seteo el usuario en el context
            navigate('/');
        } )
        .catch((err)=> console.log(err));

        
    }

  return (
    <div className='login-box-center'>
        <div className='login-box'>
            <h2>Iniciar sesion:</h2>
            <form onSubmit={handleSubmit}>
                <div className='login-box-input'>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id='email' name='email' placeholder='email@gmail.com'  onChange={handleInputchange}/>
                </div>
                <div className='login-box-input'>
                    <label htmlFor="pass">Contraseña:</label>
                    <input type="password" id='pass' name='password' placeholder='Contraseña...' onChange={handleInputchange}/>
                </div>
                <div className='login-box-button'>
                    <button type='submit'>Ingresar</button>
                </div>
            </form>
        </div>
    </div>
  )
}
