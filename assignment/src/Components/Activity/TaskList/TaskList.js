import React from 'react'
import { image } from '../../../config/image'
import { Checkbox } from 'antd'
import "./TaskList.scss"
function TaskList() {
  return (
    <div className='commentMain'>
    <div className='task'>
    <img src={image.avatar4} alt="avatar" height={56} width={56} />
        <div className='innerData'>
            <p className='paraa1'>Caleb Ward Task List:</p>
            <div className='dataTask'> <Checkbox checked></Checkbox><p className='paraa2'>Make the userflow</p></div>
            <div className='dataTask'> <Checkbox checked></Checkbox><p className="paraa2">Design low fidelity mockup</p></div>
        </div>
    </div>
    <div className='task1'>
        <p>04:25 pm</p>
        <img src={image.icon1} alt="icon" height={24} width={24}/>
    </div>

</div>
  )
}

export default TaskList