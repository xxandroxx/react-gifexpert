import React from 'react'

export const GifGridItem = ({id, title, url}) => {

 

    return (
        
            <div className='mostrar animate__animated animate__fadeInDown'>
                <h3>{title}</h3>
                <img className='' src={url} alt={title}/>
            </div>
        
    )
}
