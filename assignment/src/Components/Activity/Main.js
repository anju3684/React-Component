import React from 'react'
import Title from '../MainContent/Title/Title'
import Todo from '../project/Todo/Todo'
import Comment from './Comment/Comment'
import "./Main.scss"
import TaskList from './TaskList/TaskList'

function Main() {
  return (
    <>
    <div className='container'>
    <Title title="Today"/>
    <div className='contentMain'>
      <div className='test1'><Todo title="CaALL UI Kit" subTitle="CaDesign" attachment="12" days="5" progrss="80" /></div>
      <Comment/>
      <TaskList/>
    </div>
    <Title title="Yesterday"/>
    <div className='contentMain'>
      <div className='test1'><Todo title="CaALL UI Kit" subTitle="CaDesign"  days="5" progrss="80" /></div>
      <TaskList/>
    </div>
    </div>
    </>
  )
}

export default Main