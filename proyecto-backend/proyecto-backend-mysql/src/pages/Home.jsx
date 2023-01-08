import React, { useContext } from 'react'
import Banner from '../components/Banner';
import Cards from '../components/Cards';
import Carrousel from '../components/Carrousel';
import { BrandContext } from '../js/BrandContext';
import { UserContext } from '../js/UserContext';

export default function Home() {
  const login = useContext(UserContext);
  const brandLocation = useContext(BrandContext);
  brandLocation.setBrand(0);
  
  if(!login.user){
    return(
      <>
        <Banner/>
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
      <>
      <Banner/>
      <div>
        <Carrousel/>
      </div>
      <div className='card-section-center'>
        <Cards/>
      </div>
      </>
    )
  }

}
