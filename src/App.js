
import './App.css';
import socket from 'socket.io-client';
import { BrowserRouter as Router, Routes, Route, useRoutes } from "react-router-dom";
import Login from './components/login/Login';
import Chat from './components/chat/chat'
import Signup from './components/signup/Signup.jsx';
import Intro from './components/intro/Intro'
const ENDPOINT = "http://localhost:8000/"

const io = socket(ENDPOINT, { transports: ['websocket'] });
function App() {
  io.on('connect', () => {
    console.log("i'm comming from client side");
  })
  let routes = useRoutes([{
    path: '/login',
    element: <Login />
  },
  {
    path: '/chat',
    element: <Chat />
  },
  {
    path : '/signup',
    element : <Signup />
  },
  {
    path : '/',
    element : <Intro />
  }
])
  return routes
}
const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper; 
