import React from 'react'

export default function Brand() {
  return (
    <div className='nav-box'>
        <a href="/"><img src="../public/images/Logo_TV_2015.png" className='nav-box-logo' alt="logo" /></a>
        <div className='nav-box-search'>
            <input type="text" placeholder='buscar...'/>
            <a href=""><button><i class="fas fa-search"></i></button></a>            
        </div>
        {/* <div className='nav-box-session'> */}
            <ul className='nav-box-session-buttons'>
                <li className='nav-box-session-link'>
                    <a href="/Login">Iniciar Sesion</a>
                </li>
                <li className='nav-box-session-link'>
                    <a href="/SignUp">Crear Cuenta</a>
                </li>
            </ul>
        {/* </div> */}
    </div>
  )
}
