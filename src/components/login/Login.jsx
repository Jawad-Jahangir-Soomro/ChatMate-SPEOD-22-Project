import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import './login.css'

let user;
let pass;
export default function Login() {

    const [name, setname] = useState("");
    const senduser = ()=>{
         user = document.getElementById('user').value
         pass = document.getElementById('pass').value
    }
  return (
    <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Login Page</title>
  <div id="id01" className="modal">
    <form className="modal-content animate" action="backend.js" method="post">
      <div className="imgcontainer">
        <img src="img_avatar2.png" alt="Avatar" className="avatar" />
      </div>
      <div className="container">
        <label htmlFor="uname" />
        <input
          type="text"
          placeholder="Enter Username"
          name="uname"
          required=""
          id='user'
          onChange={(e)=>setname(e.target.value)}
        />
        <label htmlFor="psw" />
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required=""
          id='pass'
        />
         <Link onClick={(event)=>!name?event.preventDefault():null} to='/chat'><button  onClick={senduser} >Login</button></Link> 
        <label>
          <input type="checkbox" defaultChecked="checked" name="remember" />{" "}
          Remember me
        </label>
      </div>
      <div
        className="container"
        id="bottomc"
        style={{ backgroundColor: "#5b5b5b" }}
      >
     <Link to='/'> <button type="button" className="cancelbtn">
          Cancel
        </button></Link>  
        <span className="psw">
          <a href='#'>password</a>
        </span>
      </div>
    </form>
  </div>
</>

  )
}

export {user,pass}
