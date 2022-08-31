import React from 'react'
import './intro.css'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router'
import icon from '../../utils/icon.png'
export default function Intro() {
  const navigate = useNavigate();

  const chat = ()=>{
    navigate('/login')
  }
  const user = ()=>{
    navigate('/signup')
  }
  return (
    <>
    <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Landing Page</title>
  <div className="topnav" id="myTopnav">
    <div className="forAlign">
     <img id='logo' src={icon} alt="" srcset="" />
     <a href="#" id='brand'>Chat-Mate</a>
     <Link to={'/about'}> <a href="#about" id='about'>About Us  </a></Link>
    </div>
  </div>
  <div id="container">
    
    <div className="text__wrapper">
      <p className="description">
       <span>Chate-Mate</span> helps you connect and share with the people in your life.
      </p>
    </div>
    <div className="form__wrapper">
      <form className="form">
        <div>
          <button onClick={chat} type="submit" className="loginButton btn">
            Join the Chat
          </button>
          <button  onClick={user} type="submit" className="registerButton btn">
            Create new Account
          </button>
        </div>
      </form>
    </div>
  </div>
</>

    </>
  )
}
