import React, { useEffect } from 'react'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../js/UserContext'
import { BrandContext } from '../js/BrandContext';

export default function Brand() {
    const login = useContext(UserContext);
    const brandLocation = useContext(BrandContext);
    const [navBar, setNavBar] = useState(false)

    useEffect(() => {
      if (brandLocation.brand == 1) {
        setNavBar(true);
      }else{
        setNavBar(false)
      }
    }, [brandLocation.brand])
    
    const chancheOnScroll = () => {
        if(brandLocation.brand == 0)
        {
            if(window.scrollY >= 48)
            {
                setNavBar(true);
            }else{
                setNavBar(false);
            }
        }else{
            setNavBar(true);
        }
    }
    
    window.addEventListener('scroll', chancheOnScroll);

    if(login.user)
    {
        return (
            <div className='nav-box-fixed'>
            <div className={navBar ? 'nav-box-active' : 'nav-box'}>
                <div className='nav-box-session'>
                    <Link to='/'><img src="./images/Logo_TV_2015.png" className='nav-box-logo' alt="logo" /></Link>
                    <div className='nav-box-search'>
                        <input type="text" placeholder='buscar...'/>
                        <Link to=""><button className='nav-box-search-button'><i class="fas fa-search"></i></button></Link>            
                    </div>
                </div>
                {/* <div className='nav-box-session'> */}
                    <ul className='nav-box-session-buttons'>
                    <li className='nav-box-session-link'>
                            <Link to="/cart">
                                <i class="fas fa-shopping-cart"></i>
                            </Link>
                        </li>
                        <li className="nav-box-session-link">
                            <Link to='/profile' id='nav-box-session-link-profile'>
                            {login.user.image !=null ? <img src={login.user.image} className='nav-box-session-link-img'/> : <i className="fas fa-user-circle"></i>}
                                {login.user.first_name}
                            </Link>
                        </li>
                    </ul>
                {/* </div> */}
            </div>
            </div>
        ) 
    }else{
        return (
            <div className='nav-box-fixed'>
            <div className={navBar ? 'nav-box-active' : 'nav-box'}>
                <div className='nav-box-session'>
                <Link to='/'><img src="./images/Logo_TV_2015.png" className='nav-box-logo' alt="logo" /></Link>
                <div className='nav-box-search'>
                    <input type="text" placeholder='buscar...'/>
                    <Link to=""><button className='nav-box-search-button'><i className="fas fa-search"></i></button></Link>            
                </div>
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
            </div>
        ) 
    }
    

}
