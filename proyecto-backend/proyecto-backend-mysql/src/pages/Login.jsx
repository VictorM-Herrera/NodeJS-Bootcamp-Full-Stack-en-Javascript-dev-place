import React, { useState } from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../js/UserContext';

export default function Login() {
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
            if(!localStorage.getItem("token"))//esto es para testear
            {
                localStorage.setItem("token", token.tokenAccess);
            }
            login.setUser(token.user);
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
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' name='email' placeholder='email@gmail.com'  onChange={handleInputchange}/>
                </div>
                <div className='login-box-input'>
                    <label htmlFor="pass">Contraseña</label>
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
