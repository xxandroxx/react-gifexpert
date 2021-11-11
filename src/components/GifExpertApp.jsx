import React from 'react'
import { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Piece']);

    
    return (
        <div>
            <div className='title'>
                <h2>Encuentra tu Gif ideal</h2>
            
                <hr/>
           </div>

            <div className='contenedor-main'>

                <aside className='contenedor-buscador'>

                    <div className='contenido-buscador'>
                        <AddCategory setCategories={setCategories}/>
                    </div>
                </aside>

                <section>
                    <ol>
                        
                        {
                        categories.map((category) =>{
                            return <GifGrid
                            key={category}
                            category={category}
                            />
                        })

                        
                        }

                      
                       
                    </ol>

                </section>
           </div>
        </div>
    )
}
