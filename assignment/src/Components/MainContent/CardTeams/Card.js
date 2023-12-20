import React from 'react'
import "./Card.scss"
import { image } from '../../../config/image'
const data=['avatar1','avatar2','avatar1','avatar2','avatar1','avatar2']
const imageData=data.map((i,item)=>(
  <img src={image.avatar1} alt="ava" width="32px" height="32px"/>
))
function Card({title}) {
  return (
    <div className='mainCard'>
      <div className='top'>
        <div className='topContent'>
          <img src={image.avatar} alt='avatar'/>
          <div className='content'>
            <p className='p1'>{title}</p>
            <p className='p2'>30 Members</p>
          </div>
        </div>
        <div>
        <img src={image.more} alt="menu"/>
        </div>
      </div>
      <div className='user'>
        {imageData}
      </div>
    </div>
  )
}

export default Card