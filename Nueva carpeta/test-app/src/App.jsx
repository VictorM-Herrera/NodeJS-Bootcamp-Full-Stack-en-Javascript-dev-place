import { useState } from "react";

function App() {
  const [data, setData] = useState({
    username:'',
    email:'',
    image:'',
    password:''
});

  const handleChange = (event) => {
    if(event.target.name =='image')
    {
      setData({
        ...data,
        [event.target.name] : event.target.files,
       })

    }else{
      setData({
      ...data,
      [event.target.name] : event.target.value
  })
    }

  }

  const handleSubmit = (event) =>{
    event.preventDefault();

    const bodyFormData = new FormData();
    bodyFormData.append('username', data.username);
    bodyFormData.append('email', data.email);
    bodyFormData.append('image', data.image[0]);
    console.log(data.image);
    bodyFormData.append('password', data.password);
    fetch('http://localhost:3000/users',{
      method: 'POST',
      body: bodyFormData
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Nombre de usuario</label>
          <input type="text" id='username' name="username" onChange={handleChange} required/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id='email' name="email" onChange={handleChange} required/>
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input type="password" id='password' name="password"  onChange={handleChange} required/>
        </div>
        <div>
          <label htmlFor="img">Imagen:</label>
          <input type="file" name="image" onChange={handleChange} />
        </div>
        <div>
          <button type='submit'>Enviar</button>
        </div>
      </form>
    </div>
  )
}

export default App
