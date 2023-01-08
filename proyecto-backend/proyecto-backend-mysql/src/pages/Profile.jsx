import React from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BrandContext } from '../js/BrandContext';
import { UserContext } from '../js/UserContext';

export default function Profile() {
    const brandLocation = useContext(BrandContext);
    brandLocation.setBrand(1);
    const navigate = useNavigate();
    const loggedUser = useContext(UserContext);
    console.log(loggedUser);
    const logOut = (e) =>{
        sessionStorage.clear();
        loggedUser.setUser(null)
        navigate('/');
    }
  return (
    <div className='profile-box-center'>
      <div className='profile-box'>
        <div className='profile-box-img'>
          {loggedUser.user.image ? <img src="" alt="" /> : <i className="fas fa-user-circle"></i>}
        </div>
        <div className='profile-box-info'>
          <p>Nombre: {loggedUser.user.first_name}</p>
          <p>Apellido: {loggedUser.user.last_name}</p>
          <p>E-mail: {loggedUser.user.email}</p>
        </div>
        <div className='profile-box-buttons'>
          <button onClick={logOut}>Cerrar Sesion</button>
        </div>
    </div>
    </div>

  )
}
