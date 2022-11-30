import React, { useEffect, useState } from 'react'

export default function Register() {
    const [data, setData] = useState({
        name:'',
        email:'',
        pass:''
    });

    // useEffect(()=>{
    //     const requestOptions ={
    //         method: 'POST',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify(data)
    //     };
    //     fetch('https://reqres.in/api/posts',requestOptions)
    //         .then(res => res.json())
    //         .then(data => setData())
    // })

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
        fetch('http://localhost:5050/user',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(data)
        })
    }

  return (
    <div className='register-box'>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nombre</label>
                <input type="text" id='name' name='name' onChange={handleInputchange}/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id='email' name='email' onChange={handleInputchange}/>
            </div>
            <div>
                <label htmlFor="pass">Contraseña</label>
                <input type="password" id='pass' name='pass' onChange={handleInputchange}/>
            </div>
            <div>
                <button type='submit'>Enviar</button>
            </div>
        </form>
    </div>
  )
}
