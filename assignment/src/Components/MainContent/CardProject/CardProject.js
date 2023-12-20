import React from 'react'
import "./CardProject.scss"
import { image } from '../../../config/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { Progress} from 'antd'
const data=['avatar1','avatar2','avatar3','avatar2','avatar1','avatar3']
const imageData=data.map((i,item)=>(
  <img src={image[i]} alt="ava" width="32px" height="32px"/>
))

function CardProject() {
  return (
    <div className='mainCardPro'>
      <div className='sec1'>
        <div className='inner'>
          <p className='p1'>CaAll Ui Kit</p>
          <p className='p2'>C2aDesign</p>
        </div>
        <div>
        <img src={image.more} alt="menu"/>
        </div>
      </div>
      <div className='sec2'>
        <button className='probutton'>
          <img src={image.attach} alt="attach"/> <span>12</span>
        </button>
        <button className='dayButton'><FontAwesomeIcon icon={faClock} style={{color:'red'}}/><span>5 days left</span></button>
      </div>
      <div className='sec3'>
      <Progress percent={80} />
      </div>
      <div className='sec4'>
        {imageData}
      </div>

    </div>
  )
}

export default CardProject