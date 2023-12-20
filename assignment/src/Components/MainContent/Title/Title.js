import React from 'react'
import "./Title.scss"
import { image } from '../../../config/image'
function Title({title}) {
  return (
    <div className='mainTitle'>
        <p className='title'>{title}</p>
        <img src={image.more} alt='more'/>
    </div>
  )
}

export default Title