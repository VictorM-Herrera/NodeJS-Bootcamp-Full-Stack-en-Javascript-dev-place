import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import Card from './Card';

export default function Carrousel() {
    const [arrayProducts, setArrayProducts] = useState([]);
    let cont = 0;
    useEffect(() => {
        fetch('http://localhost:5050/product')
        .then((data) => data.json())
        .then((products) => products.data)
        .then((resp) => {
          setArrayProducts(resp);
        })
      }, []);

  return (
    <div className='carrousel-box-center'>
        <h3>Productos destacados:</h3>
        <div className='carrousel-box'>
            <Swiper
                freeMode={true}
                grabCursor={true}
                modules={[FreeMode]}
                className='mySwiper'
                breakpoints={{
                    0:{
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    480:{
                        slidesPerView: 2,
                        spaceBetween: 10
                    },
                    768:{
                        slidesPerView:3,
                        spaceBetween: 15,
                    },
                    1024:{
                        slidesPerView: 4,
                        spaceBetween: 15
                    },
                    1280:{
                        slidesPerView: 5,
                        spaceBetween: 30
                    }

                }}  
            >
                {arrayProducts.map((element, key) => {
                    if(cont < 10)
                    {      
                        cont++;              
                        return(
                            <SwiperSlide className='carrousel-card-center'>
                                <Card id={element.product_id} name={element.title} price= {element.price} image={element.image} key={key}/>
                            </SwiperSlide>
                        )
                        
                    }
                })}

            </Swiper>
        </div>
    </div>
  )
}
