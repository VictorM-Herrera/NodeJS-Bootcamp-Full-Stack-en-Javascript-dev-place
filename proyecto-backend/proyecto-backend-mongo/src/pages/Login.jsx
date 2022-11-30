import React, { useState } from 'react'

export default function Login() {
    const [data, setData] = useState({
        email:'',
        pass:''
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
        fetch('http://localhost:5050/user')
            .then((res)=>res.json())
            .then((dat)=> dat.map((element,index)=>{
                if(element.email == data.email && element.pass == data.pass)
                {
                    console.log("Estas logeado");
                }
            })).catch((err)=> console.log(err))
    }

  return (
    <div className='login-box'>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id='email' name='email' onChange={handleInputchange}/>
            </div>
            <div>
                <label htmlFor="pass">Contraseña</label>
                <input type="password" id='pass' name='pass' onChange={handleInputchange}/>
            </div>
            <div>
                <button type='submit'>Ingresar</button>
            </div>
        </form>
    </div>
  )
}
