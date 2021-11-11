import React from 'react'
import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

   const [inputValue, setInputValue] = useState('');



   const HandleValue = e =>{
       setInputValue(e.target.value);
   } 

   const DetenerRefresh = e =>{
       e.preventDefault();

        if(inputValue.trim().length > 2){
            setInputValue('');
       
            setCategories(() => [inputValue]);
        }
       
   }



    return (
        <aside className='buscador'>
            <h3>Buscar:</h3>

            <form onSubmit={DetenerRefresh}>
                <input
                    className='inputSearch' 
                    type='text'
                    value={inputValue}
                    onChange={HandleValue}
                />
            </form>
  
        </aside>
        
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

