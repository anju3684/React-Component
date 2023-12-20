import React from 'react'
import "./SideNavBar.scss"
import { NavLink } from "react-router-dom";
import { Button } from 'antd';
import { image } from '../../config/image';

const data = [
  {
    to: "/",
    icon: <img src={image.menu} alt="menu" width="24px" height="24px" />,
    title: 'Dashboard',
  },
  {
    to: "/Message",
    icon: <img src={image.msg} alt="msg" width="24px" height="24px" />,
    title: 'Message',
    span: <Button type="primary" style={{ borderRadius: "10px" }}>5</Button>
  },
  {
    to: "/Project",
    icon: <img src={image.project} alt="project" width="24px" height="24px" />,
    title: 'Project',
  },
  {
    to: "/Schedule",
    icon: <img src={image.schdule} alt="schdule" width="24px" height="24px" />,
    title: 'Schedule',
  },
  {
    to: "/Activity",
    icon: <img src={image.activity} alt="activity" width="24px" height="24px" />,
    title: 'Activity',
  },
];

function SideNavBar() {
  return (
    <>
      <div className='sidebar'>


        <div className='logo'></div>
        <div className='user'>
          <div className='avatar'></div>
          <div className='para'>
            <span className='p1'>Linh Nguyen</span>
            <span className='p2'>Owner & Founder</span>
          </div>
        </div>
        <div className='menu1'>
          <ul className='unorderlist'>
            {data.map((btn, i) => (
              <li key={i}>
                <NavLink to={btn.to} className='sidemenu' style={({ isActive }) => ({ fontWeight: isActive ? 700 : 400 })}>
                  <span className='icon'>{btn.icon}</span>
                  {btn.title}
                  {btn.span !== undefined && (<span className='extra'>{btn.span}</span>)}
                </NavLink>
              </li>
            ))}

          </ul>
        </div>
      </div>
      <div className='footer'>
        <p className='title'>My Teams</p>
        <div className='subdiv'>
          <div className='subdesign'>
            <img src={image.avatar} alt="avatar" />
            <div className='content'>
              <p className='p1'>CaDesign</p>
              <p className='p2'>@cadesign</p>
            </div>
          </div>
        </div>
        <div className='buttonDiv'>
          <Button> <span className='span1'>&#x002B;</span>Add New Team</Button>
        </div>
      </div>


    </>


  )
}

export default SideNavBar