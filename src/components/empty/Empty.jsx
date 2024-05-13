import React from 'react'
import "./Empty.css"
import not from '../../assets/download.png'
const Empty = ({text}) => {
  return (
    <div className='empty'>
      <div className="container">

         <img src={not} alt="" />
      </div>
    </div>
  )
}

export default Empty