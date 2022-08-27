import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './login.css'
import { useNavigate } from 'react-router-dom';

let user;
let pass;

export default function Login() {
  const toastOption = {
    positon:'top',
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: 'dark'
  }
const home = ()=>{
  navigate('/')
}
const navigate = useNavigate();
  const handleValidiate = ()=>{
    const inputuser = localStorage.getItem("username")
    const inputpass = localStorage.getItem("password")
    if(user!==inputuser){
      toast.error("please enter correct username",toastOption)
      return false
    }
    else if (pass!==inputpass){
      toast.error('please enter correct password',toastOption)
    }
    else{
      return true;
    }


  }

  const handleuser = (event)=>{
     user = event.target.value

  }   
  const handlepass = (event)=>{
    pass = event.target.value

 }   
 const handleSubmit = (event)=>{
     event.preventDefault();
   if(handleValidiate()){
       navigate('/chat')
   }


 }

  return (
    <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Login Page</title>
  <div id="id01" className="modal">
    <form className="modal-content animate" onSubmit={(event)=>handleSubmit(event)} action="/chat">
      <div className="imgcontainer">
       
      </div>
      <div className="container">
        <label htmlFor="uname" />
        <input
          type="text"
          placeholder="Enter Username"
          name="uname"
          required=""
          id='user'
          autoComplete='off'
          onChange={(event)=>handleuser(event)}
          
          />
        <label htmlFor="psw" />
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required=""
          id='pass'
          onChange={(event)=>handlepass(event)}
        />
         <button>Login</button>
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
      <button onClick={home} type="button" className="cancelbtn">
          Cancel
        </button> 
        <ToastContainer />
      </div>
    </form>
  </div>
</>

  )
}

export {user,pass}
