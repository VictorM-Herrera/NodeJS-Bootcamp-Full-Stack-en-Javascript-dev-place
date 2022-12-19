import React from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../js/UserContext';

export default function Profile() {
    const navigate = useNavigate();
    const loggedUser = useContext(UserContext);
    const logOut = (e) =>{
        sessionStorage.clear();
        loggedUser.setUser(null)
        navigate('/');
    }
  return (
    <div className='profile-box'>
        <button onClick={logOut}>Cerrar Sesion</button>
    </div>
  )
}
