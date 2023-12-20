import React from 'react'
import "./MainContent.scss"
import Title from './Title/Title'
import Card from './CardTeams/Card'
import CardProject from './CardProject/CardProject'


function MainContent() {
  return (
    <div className='container'>
      <div className='myteams'>
        <Title title="My Teams"/>
        <div className='cards'>
        <Card title='CaDesign'/>
        <Card title='UI/UX Designer'/>
        <Card title='Developer'/>
        </div>
       
      </div>
      <div className='myproject'>
        <Title title="My Projects"/>
        <div className='cardProject'>
          <CardProject/>
          <CardProject/>
          <CardProject/>
          <CardProject/>
          <CardProject/>
          <CardProject/>
        </div>
      </div>

    </div>
  )
}

export default MainContent