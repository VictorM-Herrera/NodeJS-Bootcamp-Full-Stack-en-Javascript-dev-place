import React, { useState } from 'react'
import { SwitchTransition,  CSSTransition} from 'react-transition-group';

export default function Register() {
    const [alert, setAlert] = useState(<></>)
    const [data, setData] = useState({
        first_name:'',
        last_name: '',
        email:'',
        password:''
    });

    function handleInputchange(event)
    {
        setData({
            ...data,
            [event.target.name] : event.target.value
        })
    }

    function handleSubmit(event)
    {
        event.preventDefault();
        fetch('http://localhost:5050/users',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then((res)=>
            res.json()
        ).then((data)=>{
            if(data.error)
            {
                console.log(data);
                setAlert(<div className='alert-box-err'>{data.message.errors[0].message}</div>);
                
            }else{
                console.log(data);
                setAlert(<div className='alert-box-success'>Usuario registrado</div>);
            }
        })
        .catch((err)=> {
            setAlert(<div className='alert-box-err'>Error en la BD</div>);
            console.log(err);
        })
    }

  return (
    <div className='register-box-center'>
        <div className='register-box'>
                <h2 className='register-box-title'>Registrarse: </h2>
                <>{alert}</>
            <form onSubmit={handleSubmit}>
                <div className='register-box-input'>
                    <label htmlFor="name">Nombre</label>
                    <input type="text" id='name' name='first_name' placeholder='Nombre...' onChange={handleInputchange} required/>
                </div>
                <div className='register-box-input'>
                    <label htmlFor="last_name">Apellido</label>
                    <input type="text" id='last_name' name='last_name' placeholder='Apellido...' onChange={handleInputchange} required/>
                </div>
                <div className='register-box-input'>
                    <label htmlFor="email">Email</label>
                    <input type="text" id='email' name='email' placeholder='email@gmail.com' onChange={handleInputchange} required/>
                </div>
                <div className='register-box-input'>
                    <label htmlFor="pass">Contraseña</label>
                    <input type="number" id='pass' name='password' placeholder='Contraseña...' onChange={handleInputchange} required/>
                </div>
                <div className='register-box-button'>
                    <button type='submit'>Enviar</button>
                </div>
            </form>
        </div> 
    </div>
  )
}
