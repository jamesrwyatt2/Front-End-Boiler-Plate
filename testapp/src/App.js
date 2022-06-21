
import React from 'react';
import StudentList from './components/StudentList';
import useToken from './components/useToken';
import Login from './components/Login';
import Reg from './components/Reg';
import Error from './components/Error';
import LandingPage from './components/LandingPage';
import {
  BrowserRouter,
  Routes,
  Route,
	Link,
  Outlet,
  Router,
  useNavigate,
} from "react-router-dom";
import './App.css';
import Login2 from './components/Login2';
import Reg2 from './components/Reg2';




function App() {
  const {token, setToken} = useToken();


  console.log("Checking Token for routing, token: " + token)

  if(!token){
    return (
      <div className="App">
      <BrowserRouter>
        <Routes>

        <Route path="/" element={ <NavBar />}>
          <Route index element={<LandingPage />} /> 

          <Route path="login" element={<Login2 setToken={setToken} />} />
          <Route path="/register" element={<Reg2 setToken={setToken} />} />
          <Route path="/error" element={<Error />}></Route>
        </Route>

        </Routes>
      </BrowserRouter>

      </div>
    ) }
  return (
    <div className="App">

        <BrowserRouter>
        <Routes>


        <Route path="/login"> </Route>
        <Route path="/home" element={<NavBar />}></Route>
        <Route path="/registry/add" element={<StudentList token={token} />}></Route>
        <Route path="/registry/edit" ></Route>
        <Route path="/registry/view" ></Route>


        </Routes>
        </BrowserRouter>

    </div>
  );
}

export const NavBar = () => {
  return(
    <div>
    <nav className="navbar-wrapper">

    <h1 id="header">Nav Bar!</h1>
    <ul className='navbar-list'>
        <li>
	      <Link to="/"><p>Home</p></Link>
        </li>
        <li>
	      <Link to="/login"><p>Login</p></Link>
        </li>
        <li>
	      <Link to="/register"><p>Registration</p></Link>
        </li>
      </ul>

    </nav>
    <hr />
    <Outlet />
  </div>
  )
};

const RedirectAfterLogin =() => {
  let nav = useNavigate();


  return(<></>)
}

export default App;
