import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { BrandContext } from '../js/BrandContext';
import { UserContext } from '../js/UserContext';

export default function CardInfo() {
    /***
     * hacer un fecth del producto con la id pasada por params params.id
     */
    const brandLocation = useContext(BrandContext);
    brandLocation.setBrand(1);
    const loggedUser = useContext(UserContext);

    const param = useParams();

    const [product, setProduct] = useState(null)
    useEffect(() => {
        fetch('http://localhost:5050/product/' + param.id)
            .then((res) => res.json())
            .then(data => {
                setProduct(data.data[0]);
                console.log(data.data[0]);
            })
    }, [])
    
    if(product)
    {
        return (
            <>
                <div className='card-info-center'>
                    <div className='card-info-box'>
                        <div className='card-info-img'>
                            <img src={product.image} alt="" />
                        </div>
                        <div className='card-info-text'>
                            <h3><b>{product.title}</b></h3>
                            <p>{product.description}</p>
                        </div>
                        <div className='card-info-coments'>
                            {/* agregar comentario */}
                            {/* mostrar todos los comentarios */}
                        </div>
                    </div>
                    <div className='card-info-numbers'>
                        <p> Precio: ${product.price}</p>
                        <p> Stock: {product.stock} <MDBIcon fas icon="archive" /></p>
                        {loggedUser.user === null ?  <MDBBtn color='secondary' disabled size='sm'><MDBIcon fas icon="shopping-cart" /> Comprar</MDBBtn>: <MDBBtn color='success' size='sm'><MDBIcon fas icon="shopping-cart" /> Comprar</MDBBtn>}
                    </div>
                    <div className='Seccion de comentarios:'>

                    </div>
                </div>
            </>
          )
    }
 
}
