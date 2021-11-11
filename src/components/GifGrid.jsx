import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([]);

    const {data:images, loading} = useFetchGifs(category);

    console.log();
   



    return (
        <div>
            <h3 className='titulo-mostrar animate__animated animate__fadeInDown'>{category}</h3>

            {loading ? <p className='animate__animated animate__flash'>Loading...</p> : null}

            <div className='contenedor-mostrar'>
            {
                
                images.map(img =>{
                    return <GifGridItem 
                        key={img.id}
                        {...img}
                 
                    />
                })
            }
            </div>
           
           
        </div>
    )
}
