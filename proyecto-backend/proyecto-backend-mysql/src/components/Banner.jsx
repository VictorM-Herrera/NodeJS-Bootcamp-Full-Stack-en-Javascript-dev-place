import { MDBBtn } from 'mdb-react-ui-kit'
import React from 'react'

export default function Banner() {
  return (
    <div className='banner-box'>
      <div className='banner-box-info'>
        <p>La mejor tienda de</p>
        <h3>ZAPATILLAS CON LA MEJOR CALIDAD</h3>
        <div className='banner-box-buttons'>
          <MDBBtn color='light' rippleColor='dark'>Comprar ahora</MDBBtn>
          <MDBBtn color='info'> Sobre nosotros</MDBBtn>
        </div>
      </div>
    </div>
  )
}
