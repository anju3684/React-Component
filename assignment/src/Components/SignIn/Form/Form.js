import React from 'react'
import './form.scss'
import { Checkbox } from 'antd'
import { Button } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle,faTwitter} from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from "react-router-dom";

export default function Form() {
  const navigate = useNavigate();

  const handleClick=()=>{
    localStorage.setItem("signIn",true)
    navigate("/projectMgmt")
  
  }
  return (
    <div className='model'>
      <div className='title'>
        <p className='gettingStarted'>Getting Started</p>
        <p className='secHeading'>Create an account to continue!</p> 
      </div>
      <div className='formInput'>
        <div className='inputs'>
          <input id="input" type="text" required defaultValue="caraonlabs@gmail.com" />
          <label for="input" alt="Email" placeholder="Email"></label>
          <input id="input" type="text" required defaultValue="Linh Ngyun" />
          <label for="input" alt="Name" placeholder="Your Name"></label>
          <input id="input" type="password" required defaultValue="123456789" />
          <label for="input" alt="Email" placeholder="Password"></label>
          <div className='img'></div>
          <div className='terms'>
            <Checkbox checked />
            <p className="formPara">You agree to our Term and Conditions</p>

          </div>
          <div className='register'> <Button type="primary" onClick={handleClick}>Register</Button></div>
        </div>
       
      </div>
      <div className='buttonGroup' style={{marginTop:'27px'}}>
          <p className='secHeading'>SignIn with:</p>
        </div>
        <div className='buttonGroup'>
            <Button><FontAwesomeIcon icon={faGoogle} style={{ color: '#4285F4' }}/>  <span >Google</span></Button>
            <Button><FontAwesomeIcon icon={faTwitter} style={{ color: '#4285F4' }}/>  <span>Twitter</span></Button>
          </div>
    </div>
  )
}
