import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BrandContext } from "../js/BrandContext";
import { UserContext } from "../js/UserContext";

export default function Profile() {
  const brandLocation = useContext(BrandContext);
  brandLocation.setBrand(1);

  const navigate = useNavigate();
  const loggedUser = useContext(UserContext);

  const logOut = (e) => {
    sessionStorage.clear();
    loggedUser.setUser(null);
    navigate("/");
  };

  const [edit, setEdit] = useState(false);
  
      const [data, setData] = useState({
    first_name: "",
    last_name: "",
    image: "",
    email: "",
    password: ""
  });

  function handleInputchange(e)
    {
      if (e.target.name === 'image') {
        setData({
          ...data,
          [e.target.name]: e.target.files,
        })
      }else{
        setData({
            ...data,
            [e.target.name] : e.target.value,
        })
      }
    }

  const activeEdit = () => {
    if(!edit)
    {
      setEdit(true);
    }else{
      setEdit(false);
    }
  }

  function handleSubmit(e)
    {
        e.preventDefault();
        const formData = new FormData();
        if (data.first_name != "") {
          formData.append("first_name", data.first_name);
        }
        if (data.email != "") {
          formData.append("email", data.email);
        }
        if (data.last_name != "") {
          formData.append("last_name", data.last_name);
        }
        if (data.password != "") {
          formData.append("password", data.password);
        }
        if (data.image.length != 0) {
            formData.append("image", data.image[0]);
        }
        if (!formData) {
          activeEdit();
        }else{
          fetch('http://localhost:5050/users/' + loggedUser.user.user_id,{
              method: 'PUT',
              headers: {'x-access-token': localStorage.getItem('token')
              },
              body: formData,
          }).then((res) => res.json())
          .then(update => {
              if (!update.error) {
                fetch('http://localhost:5050/users/'+ loggedUser.user.user_id)
                  .then((res) => res.json())
                  .then(data => {
                    sessionStorage.setItem("userLogged", JSON.stringify(data.data[0]))
                    loggedUser.setUser(data.data[0]);
                  })
              }
              activeEdit();
          })
          .catch((err) => console.log(err))
          formData.delete("image");
          formData.delete("first_name");
          formData.delete("last_name");
          formData.delete("email");
          formData.delete("password");
      }
    }

  

  if (loggedUser.user) {
    if (edit) {
      return(
        <div className="profile-box-center">
            <div className="profile-box-edit">
              <div className="profile-box-img">
                {loggedUser.user.image ? (<img src={loggedUser.user.image} />) : (<img src="public\images\perfil sin foto.png" alt="" />)}
              </div>
                <form onSubmit={handleSubmit}>
                  <div className="profile-box-inputs">
                    <label htmlFor="image"><b>Imagen:</b> </label>
                    <input type='file' name='image' onChange={handleInputchange} />
                    <label htmlFor="name"><b>Nombre:</b> </label>
                    <input type="text" id="name" name="first_name" defaultValue={loggedUser.user.first_name} onChange={handleInputchange}/>
                    <label htmlFor="lastName"><b>Apellido:</b></label>
                    <input type="text" id="lastName" name="last_name" defaultValue={loggedUser.user.last_name} onChange={handleInputchange}/>
                    <label htmlFor="email"><b>Email:</b></label>
                    <input type="email" id="email" name="email" defaultValue={loggedUser.user.email} onChange={handleInputchange}/>
                    <label htmlFor="password"><b>Contraseña:</b></label>
                    <input type="password" id="password" name="password" defaultValue={loggedUser.user.password}/>
                  </div>

                  <div className="profile-box-button-edit">
                    <div>
                      <MDBBtn color="warning" type="submit">
                      <MDBIcon fas icon="cloud-upload-alt" /> Guardar Cambios
                      </MDBBtn>
                    </div>
                  </div>
              </form>
            </div>
          </div>
        )
    } else {
      return (
        <div className="profile-box-center">
          <div className="profile-box">
            <div className="profile-box-img">
              {loggedUser.user.image ? (<img src={loggedUser.user.image} />) : (<img src="public\images\perfil sin foto.png" alt="" />)}
            </div>
            <div className="profile-box-info">
              <p><b>Nombre Completo:</b>  {loggedUser.user.first_name} {loggedUser.user.last_name}</p>
              <p><b>E-mail:</b>  {loggedUser.user.email}</p>
              <p><b>Contraseña:</b> ******</p>
              <div>
                <MDBBtn color="warning"><MDBIcon far icon="star" /> Lista de Favoritos <MDBIcon far icon="star" /> </MDBBtn>
              </div>
              <div>
                <MDBBtn color="success"><MDBIcon far icon="comment" /> Lista de Comentarios <MDBIcon far icon="comment" /> </MDBBtn>
              </div>
            </div>
            <div className="profile-box-buttons">
              <div>
              <MDBBtn onClick={logOut} color="danger">
              <MDBIcon fas icon="sign-out-alt" /> Cerrar Sesion
              </MDBBtn>
              </div>
              <div>
                <MDBBtn color="info" onClick={activeEdit}><MDBIcon fas icon="edit" /> Editar Perfil</MDBBtn>

              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
