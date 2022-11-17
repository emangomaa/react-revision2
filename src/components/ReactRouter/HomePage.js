import React from 'react'
import './style.modules.css'
import { useNavigate } from 'react-router-dom'
export default function HomePage (){
    const navigate = useNavigate();
    return(
        <>
            <div className='style'>
            HomePage
            </div>
            <button onClick={()=>{navigate('product-add')}}>Add Product</button>
        </>
    )
}