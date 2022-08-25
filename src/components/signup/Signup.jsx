import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import './signup.css'
export default function Signup() {
    const [email, setemail] = useState("");
  return (
    <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>SignUp Page</title>
  <div id="id01" className="modal">
    <form className="modal-content" action="backend.js">
      <div className="container">
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>
        <hr />
        <label htmlFor="username" />
        <input type="text" placeholder="Enter Username" id='user' required="" />
        <br />
        <label htmlFor="email" />
        <input type="email" placeholder="Enter Email Adress" id='email' required="" />
        <br />
        <label htmlFor="psw" />
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required=""
        />
        <br />
        <label htmlFor="psw-repeat" />
        <input
          type="password"
          placeholder="Repeat Password"
          name="psw-repeat"
          required=""
        />
        <br />
        <label>
          <input
            type="checkbox"
            defaultChecked="checked"
            name="remember"
            style={{ marginBottom: 15 }}
          />{" "}
          Remember me
        </label>
        <p>
          By creating an account you agree to our{" "}
          <a href="#" style={{ color: "dodgerblue" }}>
            Terms &amp; Conditions
          </a>
          .
        </p>
        <div className="clearfix">
       <Link to='/'> <button  type="button" className="cancelbtn">
            Cancel
          </button></Link>  
      <Link to='/login'><button type="submit" className="signupbtn">
            Sign Up
          </button></Link>     
        </div>
      </div>
    </form>
  </div>
</>

  )
}
