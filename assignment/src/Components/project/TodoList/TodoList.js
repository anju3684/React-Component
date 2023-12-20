import React from 'react'
import "./TodoList.scss"
import Title from '../../MainContent/Title/Title'
import { image } from '../../../config/image'
import Todo from '../Todo/Todo'

function TodoList({ title, list }) {
  return (
    <div className='todo'>
      <Title title={title}></Title>
      <div className='tododisplay'>
        {list && (
          list.map(element => {
               return <Todo {...element}/>
          })
        )}
      </div>
      <div className='AddCard'>
        <p><img src={image.plus} alt="plus"></img> Add another card</p>
        <img src={image.icon} alt="icon" />
      </div>
    </div>
  )
}

export default TodoList