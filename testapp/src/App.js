
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
} from "react-router-dom";
import './App.css';




function App() {
  const {token, setToken} = useToken();

  if(!token){
    return (
      <div className="App">

	

      <BrowserRouter>
        <Routes>

        <Route path="/" element={ <NavBar />}>
          <Route index element={<LandingPage />} /> 

          <Route path="login" element={<Login setToken={setToken} />} />
          <Route path="/register" element={<Reg setToken={setToken} />} />
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

export default App;
