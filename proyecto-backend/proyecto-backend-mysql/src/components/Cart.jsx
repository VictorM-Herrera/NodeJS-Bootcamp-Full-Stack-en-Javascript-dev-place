import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart'
import { BrandContext } from '../js/BrandContext';

export default function Cart() {
    const brandLocation = useContext(BrandContext);
    brandLocation.setBrand(1);

    const { isEmpty,
            items,
            totalUniqueItems,
            totalItems,
            cartTotal,
            updateItemQuantity,
            removeItem,
            emptyCart,

        } = useCart();

        if (isEmpty) {
            return (
                <>
                <div className='cart-box-center'>
                    <div className='cart-box-empty'>
                        <h1> ¡Tu carrito esta vacio!, llenalo aquí: <Link to='/'>Tienda</Link></h1>
                    </div>
                </div>
                </>
            )
        }else{
            return (
                <div className='cart-box-center'>
                    <div className='cart-box'>
                        <div className='cart-box-title'>
                            <h5><b>Carrito: </b>({totalUniqueItems}). <b>Productos totales: </b>({totalItems})</h5>
                        </div>  
                          <div className='cart-box-content'>
                                {items.map((element, key)=>{
                                    return(
                                        <div className='cart-box-row'>
                                            <div className='cart-box-data'>
                                                <div className='cart-box-data-img'>
                                                    <img src={element.img} alt="" />
                                                </div>
                                                <div className='cart-box-data-text'>
                                                    <h4><b>{element.title}</b></h4>
                                                    <h4>${element.price}</h4>
                                                    <h4>Cantidad ({element.quantity})</h4>
                                                </div>
                                                <div className='cart-box-buttons1'>
                                                    <MDBBtn size='sm'
                                                        onClick={() => updateItemQuantity(element.id, element.quantity - 1)}
                                                    ><MDBIcon fas icon="minus" /></MDBBtn>
                                                    <MDBBtn size='sm'
                                                        color='success'
                                                        onClick={() => updateItemQuantity(element.id, element.quantity + 1)}
                                                    ><MDBIcon fas icon="plus" /></MDBBtn>
                                                    <MDBBtn size='sm'
                                                        color='danger'
                                                        onClick={()=> removeItem(element.id)}
                                                    ><MDBIcon fas icon="trash-alt" /></MDBBtn>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                                <h2>Precio Total: ${cartTotal}</h2>
                            </div>
                        
                    </div>
                </div>
            )
        }

}
