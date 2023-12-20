import React from 'react'
import "./Comment.scss"
import { image } from '../../../config/image'
function Comment() {
    return (
        <div className='commentMain'>
            <div className='task'>
            <img src={image.avatar1} alt="avatar" height={56} width={56} />
                <div className='innerData'>
                    <p className='paraa1'>Terry McDaniel commented on Task:</p>
                    <p className="paraa2">Please check your email. I have sent icon references for this project</p>
                </div>
            </div>
            <div className='task1'>
                <p>04:25 pm</p>
                <img src={image.icon1} alt="icon" height={24} width={24}/>
            </div>

        </div>
    )
}

export default Comment