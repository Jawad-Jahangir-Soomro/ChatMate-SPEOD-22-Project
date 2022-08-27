import React from 'react'

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './signup.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'



let user, email, pass, confirm
export default function Signup() {
  const navigate = useNavigate();
  const toastOption = {
    position: 'top-right',
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: 'dark'
  }

  const handelValidiate = () => {

    if (user.length <= 3) {
      toast.error("username should be greater then 3 characters", toastOption)
      return false;
    }
    else if (user === null) {
      toast.error("please enter username", toastOption)
      return false;
    }
    else if (pass.length < 8) {
      toast.error("password should be greater then or equal to 8 characters", toastOption)
      return false;
    }
    else if (confirm!==pass) {
      toast.error("password and confrim password should be same", toastOption)
      return false;
    }
    else {
      return true;
    }

  }
  const handleSubmit = (event) => {

    event.preventDefault();
    if (handelValidiate()) {
      localStorage.setItem('username',user);
      localStorage.setItem('email',email);
      localStorage.setItem('password',pass);
      localStorage.setItem('confirmpassword',confirm);
      navigate('/login')
    }
  }

  const handleuser = (event) => {

    user = event.target.value

  }
  const handleemail = (event) => {

    email = event.target.value
    console.log(email);

  }
  const handlepass = (event) => {

    pass = event.target.value

  }
  const handleconfirm = (event) => {

    confirm = event.target.value

  }
  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>SignUp Page</title>
      <div id="id01" className="modal">
        <form className="modal-content" onSubmit={(event) => handleSubmit(event)} action='/login'>
          <div className="container">
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
            <hr />
            <label htmlFor="username" />
            <input autoComplete='off'  type="text" placeholder="Enter Username" id='user' onChange={(event) => handleuser(event)} required="" />
            <br />
            <label htmlFor="email" />
            <input autoComplete='off' type="email" placeholder="Enter Email Adress" id='email' onChange={(event) => handleemail(event)} required="" />
            <br />
            <label htmlFor="psw" />
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              onChange={(event) => handlepass(event)}
              required=""
            />
            <br />
            <label htmlFor="psw-repeat" />
            <input
              type="password"
              placeholder="Repeat Password"
              name="psw-repeat"
              onChange={(event) => handleconfirm(event)}
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
            {/* <p>
              By creating an account you agree to our{" "}
              <a href="#" style={{ color: "dodgerblue" }}>
                Terms &amp; Conditions
              </a>
              .
            </p> */}
            <div className="clearfix">
              <Link to='/'> <button type="button" className="cancelbtn">
                Cancel
              </button></Link>
              <button type="submit" className="signupbtn">
                Sign Up
              </button>
              <ToastContainer />
            </div>
          </div>
        </form>
      </div>
    </>

  )
}
