import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='footer-box'>
        <div className='footer-box-links'>
            <Link to={'/'}><p title='subir'><button><i class="fas fa-angle-double-up"></i></button></p></Link>
            <p>Victor Maximiliano Herrera ©</p>
            <p>HOla</p>
        </div>
    </div>
  )
}
