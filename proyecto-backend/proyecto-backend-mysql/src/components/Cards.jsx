import React, { useEffect } from 'react'
import { useState } from 'react'
import Card from './Card'

export default function Cards() {
  const [arrayProductos, setArrayProductos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5050/product')
    .then((data) => data.json())
    .then((products) => products.data)
    .then((resp) => {
      setArrayProductos(resp);
    })
  }, []);
  console.log(arrayProductos);
  return (
        <div className='card-section'>
          {
            arrayProductos.map((element, key)=>{
              console.log(element.title);
              return(
                <Card id={element.product_id} name={element.title} price= {element.price} image={element.image} key={key}/>
              )
            })
          } 
        </div>
  )
}
