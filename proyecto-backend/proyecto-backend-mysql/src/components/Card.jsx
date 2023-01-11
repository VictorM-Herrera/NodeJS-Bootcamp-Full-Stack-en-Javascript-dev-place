import React, { useEffect, useState } from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';
import { useContext } from 'react';
import { UserContext } from '../js/UserContext';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';

export default function Card(props) {
    const login = useContext(UserContext);
    const [title, settitle] = useState(props.name);
    const [fav, setFav] = useState('far fa-heart');
    
    useEffect( () => {
        const aux =  props.name;
        if(title.length > 18)
        {
            settitle(aux.substring(0, 18).padEnd(aux.length, ' . '))
        }
    }, [])

    const addToFavorite = (e) => {
        if(login.user)
        {
            if (fav == 'far fa-heart') {
                setFav('fas fa-heart')
            }else{
                setFav('far fa-heart')
            }
        }

    }
    /**Cart: */
    const {addItem} = useCart();

    const [ item ] = useState({
        id: props.id,
        title: props.name,
        price: props.price,
        img: props.image,
    });
    
  return (

    <div className='card' data-aos='fade-up'>
        <button className='card-fav-button' onClick={login.user === null ? addToFavorite : addToFavorite}><i className={fav}></i></button>
        <div className='card-img'>
           <Link to={'/cardInfo/'+ props.id}> <img src={props.image} title='Mas Informacion' alt="" /></Link>
        </div>
        <div className='card-title'>
            <p title={props.name} className='card-title-text'>{title}</p>
            
        </div>
        <div className='card-button'>
            <p className='card-price'>${props.price}</p>
            {login.user === null ?  <MDBBtn color='secondary' disabled size='sm'>Comprar</MDBBtn>: <MDBBtn color='success' size='sm' onClick={() =>addItem(item)}>Comprar</MDBBtn>}
            
        </div>
    </div>
  )
}
