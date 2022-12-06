import React, { useContext } from 'react'
import { UserContext } from '../js/UserContext';

export default function Home() {
  const login = useContext(UserContext);
  
  if(!login.user){
    return(
      <div>
        No hay Usuario
      </div>
    )
  }else{
    return (
      <div>
        Home
      </div>
    )
  }

}
