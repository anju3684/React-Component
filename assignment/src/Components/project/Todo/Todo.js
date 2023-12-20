import React from 'react'
import "./Todo.scss"
import { image } from '../../../config/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { Progress } from 'antd'
const data = ['avatar1', 'avatar2', 'avatar3', 'avatar2']
const imageData = data.map((i, item) => (
  <img src={image[i]} alt="ava" width="32px" height="32px" />
))
function Todo({ title, subTitle, attachment, days, progrss }) {
  return (
    <div className='todoMain'>
      <img src={image.labels} alt='labels' />
      <div className='inner'>
        <p className='p1'>{title}</p>
        <p className='p2'>{subTitle}</p>
      </div>
      {attachment && <button className='probutton'>
        <img src={image.attach} alt="attach" /> <span>12</span>
      </button>}
      <button className='dayButton'><FontAwesomeIcon icon={faClock} style={{ color: '#f5b544' }} /><span>{days} days left</span></button>
      <div className='progress'><Progress percent={progrss} /></div>
      <div className='lastPart'>
        {imageData}
      </div>
    </div>
  )
}

export default Todo