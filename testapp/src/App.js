
import React from 'react';
import StudentList from './components/StudentList';
import useToken from './components/useToken';
import Login from './components/Login';
import Reg from './components/Reg';
import {
  BrowserRouter,
  Routes,
  Route,
	Link
} from "react-router-dom";
import './App.css';




function App() {
  const {token, setToken} = useToken();

  if(!token){
    return (
      <div className="App">

			<WelcomeMessage />	

      <BrowserRouter>
        <Routes>

        <Route path="/" element={<WelcomeMessage />}> </Route>
        <Route path="/login" element={<Login setToken={setToken} />} ></Route>
        <Route path="/register" element={<Reg />}></Route>
        <Route path="/protected" > </Route>

        </Routes>
      </BrowserRouter>

      
      </div>
    ) }
  
  return (
    <div className="App">

        <BrowserRouter>
        <Routes>

        <Route element={<StudentList token={token} />}> </Route>
        <Route path="/home" element={<WelcomeMessage />}></Route>
        <Route path="/registry/add" ></Route>
        <Route path="/registry/edit" ></Route>
        <Route path="/registry/view" ></Route>
        <Route path="/login" ></Route>
        <Route path="/login" ></Route>

        </Routes>
        </BrowserRouter>

    </div>
  );
}

function WelcomeMessage  () {
  return(
    <>
  <h1>Welcome to my Test app!</h1>
  </>
  )
};

export default App;
