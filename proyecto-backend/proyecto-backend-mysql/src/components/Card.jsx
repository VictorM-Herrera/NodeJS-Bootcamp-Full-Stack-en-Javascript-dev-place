import React, { useEffect, useState } from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';
import { useContext } from 'react';
import { UserContext } from '../js/UserContext';

export default function Card(props) {
    const login = useContext(UserContext);
    const [title, settitle] = useState("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum nobis quidem perferendis, quaerat eos, nemo accusantium itaque molestiae numquam repellat provident eveniet, tenetur ex dolorum mollitia dicta cumque fuga veritatis!")
    const [fav, setFav] = useState('far fa-heart')
    
    useEffect(() => {
        const aux= title;
        if(title.length > 18)
        {
            settitle(aux.substring(0, 18).padEnd(aux.length, ' . '))
        }
    }, [title])

    const addToFavorite = (e) => {
        if (fav == 'far fa-heart') {
            setFav('fas fa-heart')
        }else{
            setFav('far fa-heart')
        }
    }
    
  return (

    <div className='card' data-aos='fade-up'>
        <button className='card-fav-button' onClick={login.user === null ? addToFavorite : addToFavorite}><i className={fav}></i></button>
        <div className='card-img'>
            <img src='\images\AM_211306017C6O8-1.jpg' title='Mas Informacion' alt="" />
        </div>
        <div className='card-title'>
            <p title='props.title' className='card-title-text'>{title}</p>
            
        </div>
        <div className='card-button'>
            <p className='card-price'>$1000</p>
            {login.user === null ?  <MDBBtn color='secondary' disabled size='sm'>Comprar</MDBBtn>: <MDBBtn color='success' size='sm'>Comprar</MDBBtn>}
            
        </div>
    </div>
  )
}
