import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../js/UserContext'

export default function Brand() {
    const login = useContext(UserContext);
    if(login.user)
    {
        return (
            <div className='nav-box'>
                <Link to='/'><img src="./images/Logo_TV_2015.png" className='nav-box-logo' alt="logo" /></Link>
                <div className='nav-box-search'>
                    <input type="text" placeholder='buscar...'/>
                    <Link to=""><button className='nav-box-search-button'><i class="fas fa-search"></i></button></Link>            
                </div>
                {/* <div className='nav-box-session'> */}
                    <ul className='nav-box-session-buttons'>
                    <li className='nav-box-session-link'>
                            <Link to="/">
                                <i class="fas fa-shopping-cart"></i>
                            </Link>
                        </li>
                        <li className="nav-box-session-link">
                            <Link to='/' id='nav-box-session-link-profile'>
                                <i className="fas fa-user-circle"></i>
                                {login.user.first_name}
                            </Link>
                        </li>
                    </ul>
                {/* </div> */}
            </div>
        ) 
    }else{
        return (
            <div className='nav-box'>
                <Link to='/'><img src="./images/Logo_TV_2015.png" className='nav-box-logo' alt="logo" /></Link>
                <div className='nav-box-search'>
                    <input type="text" placeholder='buscar...'/>
                    <Link to=""><button className='nav-box-search-button'><i className="fas fa-search"></i></button></Link>            
                </div>
                {/* <div className='nav-box-session'> */}
                    <ul className='nav-box-session-buttons'>
                        <li className='nav-box-session-link'>
                            <Link to="/Login">Iniciar Sesion</Link>
                        </li>
                        <li className='nav-box-session-link'>
                            <Link to="/SignUp">Crear Cuenta</Link>
                        </li>
                    </ul>
                {/* </div> */}
            </div>
        ) 
    }
    

}
