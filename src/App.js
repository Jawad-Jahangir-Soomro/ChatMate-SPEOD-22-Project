
import './App.css';

import { BrowserRouter as Router,  useRoutes } from "react-router-dom";
import Login from './components/login/Login';
import Chat from './components/chat/Chat'
import Signup from './components/signup/Signup.jsx';
import Intro from './components/intro/Intro'


function App() {
 
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
