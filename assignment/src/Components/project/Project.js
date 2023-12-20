import React from 'react'
import "./Project.scss"
import { image } from '../../config/image'
import TodoList from './TodoList/TodoList'
const list = [{ title: "UX Research for Product", subTitle: "CaDesign", days: "1", progrss: "20" }]
const list1 = [{ title: "CaAll UI Kit", subTitle: "CaDesign", days: "5",attachment:"12", progrss: "80" }, { title: "Design Website for ca.design", subTitle: "UI/UX Designer",attachment:"5", days: "1", progrss: "65" }]
function Project() {

    return (
        <div className='container'>
            <div className='headProject'>
                <button><span>Show:</span>All Projects<img src={image.iconR} alt='arrow'></img></button>
                <div className='icons'> 
                
                    <img src={image.icons} alt='icons'></img>
                    <img src={image.view} alt='view'></img>
                </div>
            </div>
            <TodoList title="Todo" list={list1}/>
            <TodoList title="Doing" list={list} />
            <TodoList title="Done" />
        </div>
    )
}

export default Project