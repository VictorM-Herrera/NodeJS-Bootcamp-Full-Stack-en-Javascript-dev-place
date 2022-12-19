import React, { useContext } from 'react'
import Cards from '../components/Cards';
import Carrousel from '../components/Carrousel';
import { UserContext } from '../js/UserContext';

export default function Home() {
  const login = useContext(UserContext);
  
  if(!login.user){
    return(
      <>
        <div>
          <Carrousel/>
        </div>
        <div className='card-section-center'>
          <Cards/>
        </div>
      </>

    )
  }else{
    return (
      <div className='card-section-center'>
        <Cards/>
      </div>
    )
  }

}
