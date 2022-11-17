import React from 'react'
import { useNavigate } from 'react-router-dom'
export const ProductAdded = ()=>{
    const navigate = useNavigate()
    return(
        <>  
            <p>Product Added To Cart</p>
            <button onClick={()=>{navigate(-1)}}>Go Back</button>
        </>
    )
}