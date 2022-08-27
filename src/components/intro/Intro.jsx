import React from 'react'
import './intro.css'
import { useNavigate } from 'react-router'
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
      <a href="#about">About Us</a>
    </div>
  </div>
  <div id="container">
    <div className="text__wrapper">
      <p className="description">
       Chat-Mate helps you connect and share with the people in your life.
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
