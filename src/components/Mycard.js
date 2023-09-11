import React from 'react'
import "./mycard.css";
const Mycard = ({src}) => { 
  
  return (
    <div className='card'>
   
    <img  src={src} alt="" />
    </div>
  )
}

export default Mycard